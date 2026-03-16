//1. Thao tác thêm dữ liệu trên localStorage
localStorage.setItem("userName", "Hoang Van Son");
const users = [
  {
    id: 1,
    name: "Hoang Van Son",
    status: true,
  },
  {
    id: 2,
    name: "Hoang Van A",
    status: false,
  },
];

//Note : Là dữ liệu có kiểu là obj và arr khi lưu lên local
//sẽ không đc hiểu bởi vì dữ liệu trên local chỉ hiểu JSON

//Cách chuyển đổi dữ liệu từ js sang JSON
localStorage.setItem("User", JSON.stringify(users));

// 2. Đọc dữ liệu
console.log("userName:", localStorage.getItem("userName"));
console.log("userName:", JSON.parse(localStorage.getItem("User")));

//3. Xóa 1 key khỏi local
