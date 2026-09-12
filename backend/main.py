import logging
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

from config import settings
from schemas import ChatRequest, ChatResponse, HealthResponse
from services.ai_service import PORTFOLIO_DATA, generate_ai_response

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("imayavaramban-portfolio-backend")

app = FastAPI(
    title="Imayavaramban S — AI Portfolio API",
    description="Backend service providing verified portfolio data and intelligent guarded AI assistant.",
    version="1.0.0"
)

# Configure CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health", response_model=HealthResponse, tags=["Health"])
def health_check():
    """Health status and current AI operational mode."""
    mode = "openai-cloud" if settings.OPENAI_API_KEY else "verified-local-engine"
    return HealthResponse(
        status="ok",
        version="1.0.0",
        ai_mode=mode
    )

@app.get("/api/portfolio", tags=["Portfolio"])
def get_portfolio():
    """Retrieve full canonical verified portfolio data."""
    if not PORTFOLIO_DATA:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Portfolio knowledge base is not loaded."
        )
    return PORTFOLIO_DATA

@app.post("/api/chat", response_model=ChatResponse, tags=["AI Assistant"])
async def chat_with_assistant(request: ChatRequest):
    """Interact with the strictly guarded AI Portfolio Assistant."""
    try:
        response = await generate_ai_response(
            message=request.message,
            conversation_history=request.conversation_history or []
        )
        if request.conversation_id:
            response.conversation_id = request.conversation_id
        return response
    except Exception as e:
        logger.error(f"Error handling chat request: {e}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while communicating with the AI Assistant."
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host=settings.HOST, port=settings.PORT, reload=True)
