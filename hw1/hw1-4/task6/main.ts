function addUl1(text: string): void {
    document.write("<ul>")
    for (let i: number = 0; i <3; i++) {
        document.write(
            `<li>${text}</li>
            `
        )
    }
    document.write("</ul>")
}

addUl1("qwe")
