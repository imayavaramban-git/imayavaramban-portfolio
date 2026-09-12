import urllib.request
import json

def verify_live():
    print("=== Testing Live Portfolio End-to-End ===")
    
    # 1. Test Backend Health
    res_health = urllib.request.urlopen("http://127.0.0.1:8000/api/health")
    assert res_health.status == 200
    print("[PASS] Backend Health:", res_health.read().decode())

    # 2. Test Backend Portfolio
    res_port = urllib.request.urlopen("http://127.0.0.1:8000/api/portfolio")
    assert res_port.status == 200
    data = json.loads(res_port.read().decode())
    assert data["personal"]["name"] == "Imayavaramban S"
    print(f"[PASS] Backend Portfolio: {data['personal']['name']} - {data['personal']['hero_title']}")

    # 3. Test Frontend Vite Server
    res_front = urllib.request.urlopen("http://127.0.0.1:5173")
    assert res_front.status == 200
    html_content = res_front.read().decode("utf-8")
    assert "Imayavaramban S" in html_content
    print("[PASS] Frontend Vite Server: HTTP 200 OK, title loaded")

    # 4. Test Frontend Proxy to Backend /api/portfolio
    res_proxy = urllib.request.urlopen("http://127.0.0.1:5173/api/portfolio")
    assert res_proxy.status == 200
    proxy_data = json.loads(res_proxy.read().decode())
    assert len(proxy_data["projects"]) == 5
    print(f"[PASS] Frontend Proxy /api/portfolio: {len(proxy_data['projects'])} projects loaded via Vite proxy")

    # 5. Test Chat Assistant via Proxy
    chat_payload = json.dumps({"message": "Tell me about his role in ShePreneur."}).encode("utf-8")
    chat_req = urllib.request.Request(
        "http://127.0.0.1:5173/api/chat",
        data=chat_payload,
        headers={"Content-Type": "application/json"}
    )
    chat_res = urllib.request.urlopen(chat_req)
    assert chat_res.status == 200
    chat_data = json.loads(chat_res.read().decode())
    print("[PASS] Chat Assistant via Proxy Response:")
    print("       " + chat_data["reply"][:140] + "...")

    print("\nALL LIVE END-TO-END CHECKS PASSED PERFECTLY!")

if __name__ == "__main__":
    verify_live()
