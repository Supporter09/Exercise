class Book {
    id;
    name;
    price;
    publishedDate;
    update(data) {
        this.id = data.id ;
        this.name = name.id;
        this.price = price.id;
        this.publishedDate = publishedDate.id;
    }
    constructor(id,name,price,publishedDate) {
        this.id = id ;
        this.name = name;
        this.price = price;
        this.publishedDate = publishedDate;
        console.log(this)
    }
    
}

class ComicBook extends Book {
    funny ; 
    pageNumber;
    constructor(id,name,price,publishedDate,funny,pageNumber) {
        super(id,name,price,publishedDate);
        this.funny = funny;
        this.pageNumber = pageNumber;
    }
}

class TextBook extends Book {
    subject ; 
    grade;
    constructor(id,name,price,publishedDate,subject,grade) {
        super(id,name,price,publishedDate) ;
        this.subject = subject;
        this.grade  = grade ; 
    }
}

class ScienceBook extends Book {
    major ; 
    constructor(id,name,price,publishedDate,major) {
        super(id,name,price,publishedDate);
        this.major = major ;
    }
}

class BookShelf {
    name ; 
    owner ;
    dateModified ;
    constructor(name,owner,dateModified) {
        this.name = name;
        this.owner = owner;
        this.dateModified =dateModified;
        this.books=[];
    }
    addBook(book) {
        this.books.push(book);
        console.log(this.books);
    };
    //data la object gom id;name;price;publishedDate
    updateBook(id,data) {
        for (let index = 0; index < this.books.length; index++) {
            let element = this.books[index];
            if (element.id==id) {
                element.update(data);
            }
        }
    }; 
    deleteBook(id) {
        for (let index = 0; index < this.books.length; index++) {
            let element = this.books[index];
            if (element.id==id) {
                this.books.pop(index);
            }
        }
    } ; 
    showBook() {
        for (let index = 0; index < this.books.length; index++) {
            let element = this.books[index];
            console.log(element);
        }
    };
    findBook(name) {
        booksInOrder = [];
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].name === name) {
            booksInOrder += books[i];
          }
        }
        console.log(booksInOrder);
    };
    constructor(name,owner,dateModified) {
        this.name = name ;
        this.owner = owner;
        this.dateModified = dateModified ;
        
        console.log(this)
    }
}
let bookCase = new BookShelf("SÁCH KHOA HỌC","MINH","24.11.2020")
let book1 = new Book(01,":v",3456,"20/11/1999")
let book2 = new ComicBook(02,"Dragon Ball",25000,"30/10/2020",5,150)
let book3 = new TextBook(03,"Sinh 10",56000,"10/11/2020","Sinh",10)
let book4 = new ScienceBook(04,"1 vạn câu hỏi vì sao",100000,"15/10/2005","Hỏi đáp")

// Trả lời : Em nghĩ có thể truyền thể hiện  ComicBook, TextBook, ScienceBook vào addBook vì  ComicBook, TextBook, ScienceBook đều kế thừa từ class Book.

// bài 1 : 
// Các module chỉ là tập hợp các từ ngữ (hoặc code, tùy từng trường hợp).
// Các module tốt, tuy nhiên, lại có tính tự đóng gói cao với những tính năng riêng biệt, cho phép chúng có thể bị xáo trộn, xóa bỏ, hay thêm vào nếu cần thiết mà không làm hỏng hệ thống.
// import dùng để nhập các module vào phần code của mình :v 
// named export được sử dụng để xuất nhiều thứ từ một module bằng cách thêm keyword export vào khai báo của chúng. Những thứ được export sẽ được phân biệt bằng tên. Sau đó import những thứ chúng ta cần sử dụng bằng cách bao quanh chúng cặp dấu ngoặc nhọn { }