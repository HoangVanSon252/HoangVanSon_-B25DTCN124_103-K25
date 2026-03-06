import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const editInputRef = useRef(null);

  // Focus vào input khi vào chế độ edit
  useEffect(() => {
    if (editingIndex !== -1 && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingIndex]);

  // Thêm task mới
  const addTask = () => {
    const task = inputValue.trim();
    if (task !== "") {
      const newTask = {
        nameTask: task,
        isCompleted: false,
      };
      setTodos([...todos, newTask]);
      setInputValue("");
      console.log("Đã thêm:", [...todos, newTask]);
    } else {
      alert("Vui lòng nhập tên công việc!");
    }
  };

  // Xử lý Enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  // Xóa task
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Bắt đầu edit
  const startEdit = (index) => {
    setEditingIndex(index);
  };

  // Hủy edit
  const cancelEdit = () => {
    setEditingIndex(-1);
  };

  // Lưu edit
  const saveEdit = (index, newName) => {
    const newTodos = [...todos];
    newTodos[index].nameTask = newName;
    setTodos(newTodos);
    setEditingIndex(-1);
  };

  // Toggle checkbox
  const toggleTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  // Tính toán số task hoàn thành
  const completedCount = todos.filter((t) => t.isCompleted).length;
  const allCompleted =
    todos.length > 0 && todos.every((t) => t.isCompleted === true);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>📝 Quản Lý Công Việc</h1>
        <div className="input-group">
          <input
            type="text"
            id="taskInput"
            placeholder="Nhập công việc mới..."
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            id="addBtn"
            className="btn-add"
            onClick={addTask}
          >
            Thêm
          </button>
        </div>
      </header>

      {/* Body - Task List */}
      <main className="task-list" id="taskList">
        {todos.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <div className="empty-state-text">
              Chưa có công việc nào. Hãy thêm công việc mới!
            </div>
          </div>
        ) : (
          todos.map((item, index) => {
            const textClass = item.isCompleted ? "completed-text" : "";
            const opacityStyle = item.isCompleted ? { opacity: 0.5 } : {};

            if (index === editingIndex) {
              return (
                <div key={index} className="task-item" style={opacityStyle}>
                  <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={item.isCompleted}
                    onChange={() => toggleTask(index)}
                  />
                  <input
                    type="text"
                    id="edit-input"
                    ref={editInputRef}
                    value={item.nameTask}
                    onChange={(e) => {
                      const newTodos = [...todos];
                      newTodos[index].nameTask = e.target.value;
                      setTodos(newTodos);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveEdit(index, e.target.value);
                      } else if (e.key === "Escape") {
                        cancelEdit();
                      }
                    }}
                  />
                  <button
                    className="btn-save"
                    onClick={() => saveEdit(index, todos[index].nameTask)}
                  >
                    💾 Lưu
                  </button>
                  <button className="btn-cancel" onClick={cancelEdit}>
                    ❌ Hủy
                  </button>
                </div>
              );
            }

            return (
              <div key={index} className="task-item" style={opacityStyle}>
                <input
                  type="checkbox"
                  className="task-checkbox"
                  checked={item.isCompleted}
                  onChange={() => toggleTask(index)}
                />
                <span className={`task-text ${textClass}`}>
                  {item.nameTask}
                </span>
                <div className="task-actions">
                  <button className="btn-edit" onClick={() => startEdit(index)}>
                    ✏️ Sửa
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => deleteTask(index)}
                  >
                    🗑️ Xóa
                  </button>
                </div>
              </div>
            );
          })
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="task-counter">
          <span id="completedCount">{completedCount}</span> /
          <span id="totalCount">{todos.length}</span> công việc hoàn thành
        </div>
        {allCompleted && (
          <div id="status" style={{ display: "block" }}>
            ✅ Hoàn Thành Tất cả!
          </div>
        )}
      </footer>
    </div>
  );
}

export default App;
