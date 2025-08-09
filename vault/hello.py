import typer

app = typer.Typer()

@app.command()
def greet(name: str = typer.Option(..., "--name", "-n", help="あなたの名前")):
    print(f"こんにちは、{name}さん！")

if __name__ == "__main__":
    app()