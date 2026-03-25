// Dữ liệu mặc định
const defaultData = [
  { id: 1, name: "Nắng ấm xa dần", author: "Sơn Tùng MTP" },
  { id: 2, name: "Ba kể con nghe", author: "Trịnh Thăng Bình" },
  { id: 3, name: "Bóng phù hoa", author: "Phương Mỹ Chi" },
  { id: 4, name: "Sóng gió", author: "J97" },
];

let songLists = JSON.parse(localStorage.getItem("list")) || defaultData;
if (!localStorage.getItem("list")) {
  localStorage.setItem("list", JSON.stringify(defaultData));
}

const songTable = document.getElementById("songTable");
const titleInput = document.getElementById("title");
const artistInput = document.getElementById("artist");
const submitBtn = document.getElementById("submitBtn");
const formTitle = document.getElementById("formTitle");
const searchInput = document.getElementById("search");

let editingId = null;

const saveData = () => {
  localStorage.setItem("list", JSON.stringify(songLists));
};
const render = (data = songLists) => {
  songTable.innerHTML = data
    .map(
      (song) => `
    <tr>
      <td class="id">${song.id}</td>
      <td class="name">${song.name}</td>
      <td class="author">${song.author}</td>
      <td> 
        <button class="btn-edit" onclick="editSong(${song.id})">Sửa</button>
        <button onclick="deleteSong(${song.id})">Xóa</button>
      </td>
    </tr>
  `,
    )
    .join("");
};
function handleSubmit() {
  const name = titleInput.value.trim();
  const author = artistInput.value.trim();

  if (!name || !author) {
    alert("Vui lòng không để trống tên bài hát và ca sĩ!");
    return;
  }

  if (editingId) {
    const index = songLists.findIndex((s) => s.id === editingId);
    if (index !== -1) {
      songLists[index] = { ...songLists[index], name, author };
    }
    editingId = null;
    formTitle.innerHTML = "🎵 Thêm bài hát";
    submitBtn.innerHTML = "Thêm";
  } else {
    const newId =
      songLists.length > 0 ? Math.max(...songLists.map((s) => s.id)) + 1 : 1;
    songLists.push({ id: newId, name, author });
  }
  titleInput.value = "";
  artistInput.value = "";

  saveData();
  searchInput.value = "";
  render();
}

function editSong(id) {
  const song = songLists.find((s) => s.id === id);
  if (!song) return;

  // Đẩy dữ liệu lên form
  titleInput.value = song.name;
  artistInput.value = song.author;
  editingId = id;

  formTitle.innerHTML = "🎵 Sửa bài hát";
  submitBtn.innerHTML = "Cập nhật";
}

function deleteSong(id) {
  const choice = confirm("Bạn có chắc chắn muốn xóa bài này không?");
  if (choice) {
    songLists = songLists.filter((s) => s.id !== id);
    saveData();
    searchSong();
  }
}

function searchSong() {
  const keyword = searchInput.value.toLowerCase().trim();
  const filteredData = songLists.filter(
    (song) =>
      song.name.toLowerCase().includes(keyword) ||
      song.author.toLowerCase().includes(keyword),
  );
  render(filteredData);
}

render();
