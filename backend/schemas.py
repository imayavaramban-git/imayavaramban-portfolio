from typing import List, Optional, Any, Dict
from pydantic import BaseModel, Field, field_validator

class ChatMessage(BaseModel):
    role: str = Field(..., description="Role of the sender: user, assistant, or system")
    content: str = Field(..., description="Text content of the message")

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=1000, description="User's query to the AI assistant")
    conversation_history: Optional[List[ChatMessage]] = Field(default=[], description="Previous conversation turns")
    conversation_id: Optional[str] = Field(default=None, description="Optional conversation tracking identifier")

    @field_validator("message")
    @classmethod
    def validate_message(cls, v: str) -> str:
        trimmed = v.strip()
        if not trimmed:
            raise ValueError("Message cannot be empty or contain only whitespace.")
        return trimmed

class ChatResponse(BaseModel):
    reply: str
    conversation_id: Optional[str] = None
    sources: Optional[List[str]] = Field(default_factory=list)

class HealthResponse(BaseModel):
    status: str
    version: str
    ai_mode: str
