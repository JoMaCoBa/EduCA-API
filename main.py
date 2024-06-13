from fastapi import FastAPI

app = FastAPI()
app.title = "EduCA-API"
app.version = "Alpha"

@app.get("/", tags=['home'])
def read_root():
    return {"Hello": "World"}
