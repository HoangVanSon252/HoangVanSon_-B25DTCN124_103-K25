const transactions = [
  {
    id: 1,
    description: "Lương tháng 1",
    amount: 5000000,
    type: "Chi tiêu",
    category: "Lương",
    date: "2024-01-01",
    notes: "Lương tháng 1",
  },
  {
    id: 2,
    description: "Tiền ăn",
    amount: -150000,
    type: "Chi tiêu",
    category: "Ăn uống",
    date: "2024-01-02",
    notes: "Ăn trưa tại nhà",
  },
  {
    id: 3,
    description: "Tiền điện thoại",
    amount: -200000,
    type: "Chi tiêu",
    category: "Hóa đơn",
    date: "2024-01-02",
    notes: "Thanh toán hóa đơn điện thoại",
  },
  {
    id: 4,
    description: "Thưởng",
    amount: 200000,
    type: "Thu nhập",
    category: "Thưởng",
    date: "2024-01-03",
    notes: "Thưởng tháng 1",
  },
];
const categoryes = [
  "Lương",
  "Thưởng",
  "Ăn uống",
  "Di chuyển",
  "Giải trí",
  "Hóa đơn",
  "Sức khỏe",
  "Khác",
];
const showTransactions = (transactionArr) => {
  if (transactionArr.length === 0) {
    console.log("Không có giao dịch nào để hiển thị.");
    return;
  }
  console.log("Danh sách giao dịch:");
  transactionArr.forEach((transaction) => {
    console.log(
      `ID: ${transaction.id} | ${transaction.date} | ${transaction.category} | ${transaction.amount} |${transaction.description} | ${transaction.notes}`,
    );
  });
};

const addTransaction = () => {
  // 1. Nhập và kiểm tra ID
  let newId = +prompt("Nhập ID giao dịch:");
  while (!newId || isNaN(newId)) {
    alert("ID giao dịch phải là một số khác 0!");
    newId = +prompt("Nhập lại ID giao dịch:");
  }
  while (transactions.some((t) => t.id === newId)) {
    alert("ID giao dịch đã tồn tại!");
    newId = +prompt("Nhập lại ID giao dịch:");
  }

  // 2. Nhập và kiểm tra Description
  let newDescription = prompt("Nhập mô tả giao dịch:");
  while (!newDescription || newDescription.trim() === "") {
    alert("Mô tả không được để trống");
    newDescription = prompt("Nhập lại mô tả giao dịch:");
  }

  // 3. Nhập và kiểm tra Amount
  let newAmount = +prompt(
    "Nhập số tiền giao dịch - nếu chi tiêu thì nhập số âm:",
  );
  while (isNaN(newAmount) || newAmount === 0) {
    alert("Số tiền giao dịch phải là một số khác 0!");
    newAmount = +prompt(
      "Nhập lại số tiền giao dịch - nếu chi tiêu thì nhập số âm:",
    );
  }

  // 4. Nhập và kiểm tra Type
  let newType = prompt(
    "Nhập loại giao dịch (Thu nhập/Chi tiêu):",
  )?.toLowerCase();
  while (newType !== "thu nhập" && newType !== "chi tiêu") {
    alert("Loại giao dịch phải là 'Thu nhập' hoặc 'Chi tiêu'!");
    newType = prompt(
      "Nhập lại loại giao dịch (Thu nhập/Chi tiêu):",
    )?.toLowerCase();
  }

  // 5. Nhập và kiểm tra Category
  let newCategory = prompt("Nhập danh mục giao dịch:");
  if (!categoryes.includes(newCategory)) {
    // Đảm bảo biến 'categories' đã được định nghĩa
    alert("Danh mục không hợp lệ! Danh sách: " + categoryes.join(", "));
    return;
  }

  // 6. Nhập và kiểm tra Date
  let newDate = prompt("Nhập ngày giao dịch (YYYY-MM-DD):");
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  if (!dateRegex.test(newDate)) {
    alert("Ngày không đúng định dạng YYYY-MM-DD");
    return;
  }

  let newNotes = prompt("Nhập ghi chú (có thể bỏ trống):");

  // Tạo đối tượng và thêm vào danh sách
  let newTransaction = {
    id: newId,
    description: newDescription,
    amount: newAmount,
    type: newType,
    category: newCategory,
    date: newDate,
    notes: newNotes,
  };

  transactions.push(newTransaction);
  alert("Thêm giao dịch thành công!");
  showTransactions(transactions);
};

const deleteTransaction = () => {
  let idToDelete = +prompt("Nhập ID giao dịch cần xóa:");
  const index = transactions.findIndex((t) => t.id === idToDelete);
  if (index !== -1) {
    transactions.splice(index, 1);
    alert("Xóa giao dịch thành công!");
    showTransactions(transactions);
  } else {
    alert("Không tìm thấy giao dịch với ID này!");
  }
};

const editTransaction = () => {
  let idToEdit = +prompt("Nhập ID giao dịch cần sửa:");
  let newDescription = prompt("Nhập mô tả mới (để trống nếu không đổi):");
  let newAmount = prompt("Nhập số tiền mới (để trống nếu không đổi):");
  let newType = prompt(
    "Nhập loại mới (Thu nhập/Chi tiêu, để trống nếu không đổi):",
  );
  let newCategory = prompt("Nhập danh mục mới (để trống nếu không đổi):");
  let newDate = prompt("Nhập ngày mới (YYYY-MM-DD, để trống nếu không đổi):");
  let newNotes = prompt("Nhập ghi chú mới (để trống nếu không đổi):");
  while (newAmount && (isNaN(newAmount) || newAmount === 0)) {
    alert("Số tiền giao dịch phải là một số khác 0!");
    newAmount = prompt("Nhập lại số tiền mới (để trống nếu không đổi):");
  }
  const index = transactions.findIndex((t) => t.id === idToEdit);
  if (index !== -1) {
    transactions[index].description =
      newDescription || transactions[index].description;
    transactions[index].amount = newAmount
      ? +newAmount
      : transactions[index].amount;
    transactions[index].type = newType || transactions[index].type;
    transactions[index].category = newCategory || transactions[index].category;
    transactions[index].date = newDate || transactions[index].date;
    transactions[index].notes = newNotes || "";
    alert("Sửa giao dịch thành công!");
    showTransactions(transactions);
  } else {
    alert("Không tìm thấy giao dịch với ID này!");
  }
};

const searchTransactions = (transactions) => {
  let choie;
  do {
    choice = +prompt(`Bạn muốn tìm kiếm theo:
1. Mô tả
2. Số tiền
Nhập lựa chọn (1-2):
    `);
    switch (choice) {
      case 1:
        let keyword = prompt("Nhập từ khóa tìm kiếm (mô tả hoặc ghi chú):");
        const resultsDescription = transactions.filter(
          (t) =>
            t.description.toLowerCase().includes(keyword.toLowerCase()) ||
            t.notes.toLowerCase().includes(keyword.toLowerCase()),
        );
        if (resultsDescription.length > 0) {
          showTransactions(resultsDescription);
        } else {
          alert("Không tìm thấy giao dịch nào phù hợp!");
        }
        break;
      case 2:
        let findAmount = prompt("Bạn có muốn tìm kiếm theo số tiền:");
        const resultsAmount = transactions.filter(
          (t) => t.amount >= +findAmount,
        );
        if (resultsAmount.length > 0) {
          showTransactions(resultsAmount);
        } else {
          alert("Không tìm thấy giao dịch nào phù hợp!");
        }
        break;
      default:
        break;
    }
  } while (choice !== 1 && choice !== 2);
};

const filterTransactions = (transactions) => {
  let choie;
  do {
    choice = +prompt(`Bạn muốn lọc giao dịch theo:
1. Theo type
2. theo category
Nhập lựa chọn (1-2):
    `);
    switch (choice) {
      case 1:
        const filterType = prompt(
          "Nhập loại giao dịch để lọc (Thu nhập/Chi tiêu):",
        )?.toLowerCase();
        const resultsType = transactions.filter(
          (t) => t.type.toLowerCase() === filterType,
        );
        if (resultsType.length > 0) {
          showTransactions(resultsType);
        } else {
          alert("Không tìm thấy giao dịch nào phù hợp!");
        }
      case 2:
        const filterCategory = prompt("Nhập danh mục để lọc:");
        const resultsCategory = transactions.filter(
          (t) => t.category.toLowerCase() === filterCategory.toLowerCase(),
        );
        if (resultsCategory.length > 0) {
          showTransactions(resultsCategory);
        } else {
          alert("Không tìm thấy giao dịch nào phù hợp!");
        }
        break;
      default:
        break;
    }
  } while (choice !== 1 && choice !== 2);
};

const sortTransactions = (transactions) => {
  let choice;
  do {
    choice = +prompt(`Bạn muốn sắp xếp giao dịch theo:
1. Ngày
2. Số tiền
Nhập lựa chọn (1-2):
        `);
    switch (choice) {
      case 1:
        transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
        showTransactions(transactions);
        break;
      case 2:
        transactions.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
        showTransactions(transactions);
        break;
      default:
        break;
    }
  } while (choice !== 1 && choice !== 2);
};
const generateReport = (transactions) => {
  const totalIncome = transactions
    .filter((t) => t.type.toLowerCase() === "thu nhập")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type.toLowerCase() === "chi tiêu")
    .reduce((sum, t) => sum + t.amount, 0);
  const soDu = totalIncome + totalExpense;
  const maxChiTieu = transactions
    .filter((t) => t.type.toLowerCase() === "chi tiêu")
    .reduce(
      (max, t) => (Math.abs(t.amount) > Math.abs(max) ? t.amount : max),
      0,
    );
  const month = transactions.every((t) => t.amount > 0.7 * totalIncome)
    ? "có"
    : "Không";
  console.log("Báo cáo tài chính:");
  console.log(`Tổng thu nhập: ${totalIncome}`);
  console.log(`Tổng chi tiêu: ${totalExpense}`);
  console.log(`Số dư: ${soDu}`);
  console.log(`Giao dịch chi tiêu lớn nhất: ${maxChiTieu}`);
  console.log(`Tháng có thu nhập lớn hơn 70% tổng thu nhập: ${month}`);
};
let choice;

do {
  choice = +prompt(`
    QUẢN LÝ THU CHI CÁ NHÂN
1. Xem tất cả giao dịch
2. Thêm giao dịch mới
3. Xóa giao dịch
4. Sửa giao dịch
5. Tìm kiếm giao dịch
6. Lọc theo loại / danh mục
7. Sắp xếp giao dịch
8. Xem báo cáo tài chính
0. Thoát
Nhập lựa chọn (0-8):
    `);
  switch (choice) {
    case 1:
      showTransactions(transactions);
      break;
    case 2:
      addTransaction(transactions);
      break;
    case 3:
      deleteTransaction(transactions);
      break;
    case 4:
      editTransaction(transactions);
      break;
    case 5:
      searchTransactions(transactions);
      break;
    case 6:
      filterTransactions(transactions);
      break;
    case 7:
      sortTransactions(transactions);
      break;
    case 8:
      generateReport(transactions);
      break;
    case 0:
      alert("Exiting the program. Goodbye!");
      break;
    default:
      alert("Invalid choice. Please try again.");
  }
} while (choice !== 0);
