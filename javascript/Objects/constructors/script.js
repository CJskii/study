function book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        let info = `${this.name} by ${this.author}, ${this.pages} pages, ${read} yet`
      return info;
    }
  }

  let theHobbit = new book("The Hobbit", "J.R.R Tolkien", "295", "not read")

  console.log(theHobbit.info())
  
