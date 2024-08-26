// class User {
//   public name: string;
//   public email: string;
//   private readonly city: string = "Patna";
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }

class User {
  protected courseCount: number = 1;
  constructor(
    public name: string,
    public email: string,
    private userId: number
  ) {}

  get getName(): string {
    return this.name;
  }

  get getCourseCount(): number {
    return this.courseCount;
  }

  set setCourseCount(value: number) {
    this.courseCount = value;
  }
}

const user1 = new User("muskan", "muskan@");
console.log(user1.name);
console.log(user1.getName);

class SubUser extends User {
  changeCourseCount() {
    this.courseCount = 2;
  }
}

const subUser1 = new SubUser("John", "john@example.com", 102);
subUser1.changeCourseCount();
console.log(subUser1.getCourseCount); // Should print 2