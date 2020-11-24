
//Tính đóng gói
function Person(firstName, lastName) {
    var fstName = firstName;
    var lstName = lastName;
    
    this.setFirstName = function(firstName) { 
        fstName = firstName; 
    };
  
    this.getFirstName = function() {
        return fstName; 
    };
    
    this.setLastName = function(lastName) { 
        lstName = lastName; 
    };
  
    this.getLastName = function() { 
        return lstName; 
    };
  }
  
  var person1 = new Person('Khoa', 'Nguyen');
  console.log(person1.fstName); // Undefined, không thể truy cập được
  
  
  console.log(person1.getFirstName()); // Khoa

//Tính kế thừa
function Person() {
    this.firstName = 'Per';
    this.lastName = 'son';
    this.sayName = function() { return this.firstName + ' ' + this.lastName };
  }
  
  // Viết một Constructor Function khác
  function SuperMan(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Ta muốn SuperMan sẽ kế thừa các thuộc tính của Person
  // Sử dụng prototype để kế thừa
  SuperMan.prototype = new Person();
  
  // Tạo một object mới bằng Constructor Function 
  var sm = new SuperMan('Khoa', 'Nguyen');
  sm.sayName(); // Khoa Nguyen. Hàm này kế thừa từ prototype của Person

  //Tính đa hình và trừu tượng trong JS không được rõ ràng 
  // Đa hình là cùng một method nhưng công việc mà method thực hiện có thể khác nhau ví dụ: cùng 1 func ADD nhưng vs cái thứ nhất mình có 
  //thể cộng hai số nguyên còn cái thứ hai có thể cộng hai số thực
  
  
  // Tính trừu tượng ở đây sinh ra chủ yếu để trừu tượng hóa và định nghĩa các tính chất hành vi phải có để xác định đó là đối tượng gì dựa vào tính chất hành vi của đối tượng.(ví dụ động vật thì phải có ăn và thở thì bất kì cái nào kế thừa cx sẽ đều có những chức năng này)
  // => Các method trừu tượng đều rỗng không thực hiện bất kỳ hành vy nào, hành vy sẽ được triển khai cụ thể do các đối tượng kế thừa.