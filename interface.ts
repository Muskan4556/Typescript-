interface User {
  readonly _dbId: string;
  email: string;
  userId: number;
  googleId?: string; // optional
  // function
  // // Method signatures
  //startTrail: () => string; // return string
  startTrail(): string;
  //   getCoupon: (couponName: string) => number
  getCoupon(couponName: string): number;
}

// update interface by writing it again
// AKS Re-opening of the interface
interface User {
  githubToken: string;
}

// interface also allows inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const user: Admin = {
  role: "ta",
  _dbId: "123",
  email: "user@example.com",
  userId: 1,
  startTrail: () => {
    return "trial started";
  },
  getCoupon: (name: "abc10") => {
    // not necessary to match the name i.e name and couponName
    return 10;
  },
  githubToken: "46848",
};

user.email = "user1@example.com";
// user._dbId = 4; // error - read only property
