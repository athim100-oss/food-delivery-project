import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Admin.css";

export default function Admin() {
  const [user, setUser] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [orders, setOrders] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get("http://localhost:5000/User");
      setUser(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.log("Get User Error:", error);
      alert("Failed to get users");
    }
  }

  async function deleteUser(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/User/${id}`);
      setUser(user.filter((item) => item._id !== id));
      alert("User deleted successfully");
    } catch (error) {
      console.log("Delete User Error:", error);
      alert("Delete failed");
    }
  }

  function handleEdit(item) {
    setEditUser(item);
  }

  // USER INPUT

  function handleChange(e) {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  }

  // UPDATE USER

  async function updateUser(e) {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/User/${editUser._id}`, {
        fullname: editUser.fullname,
        phonenumber: editUser.phonenumber,
        email: editUser.email,
        password: editUser.password,
      });
      await getUser();
      setEditUser(null);
      alert("User updated successfully");
    } catch (error) {
      console.log("Update User Error:", error);
      alert("Update failed");
    }
  }

  // GET ALL ORDERS

  async function getOrders() {
    try {
      const response = await axios.get("http://localhost:5000/Order");
      setOrders(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.log("Get Orders Error:", error);
      alert("Failed to get orders");
    }
  }

  // UPDATE ORDER STATUS

  async function updateOrderStatus(id, status) {
    try {
      await axios.patch(`http://localhost:5000/Order/${id}/status`, {
        status,
      });
      await getOrders();
      alert("Order status updated");
    } catch (error) {
      console.log("Update Order Status Error:", error);
      alert(error.response?.data?.message || "Status update failed");
    }
  }

  // DELETE ORDER
  async function deleteOrder(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?",
    );
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/Order/${id}`);
      setOrders(orders.filter((item) => item._id !== id));

      alert("Order deleted successfully");
    } catch (error) {
      console.log("Delete Order Error:", error);
      alert("Order delete failed");
    }
  }

  // USE EFFECT

  useEffect(() => {
    getUser();
    getOrders();
  }, []);

  return (
    <div>
      <div className="admin-container">
        <h2>Admin Dashboard</h2>

        <h3>All Users</h3>
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Fullname</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {user.length === 0 ? (
                <tr>
                  <td colSpan="6">No Users Found</td>
                </tr>
              ) : (
                user.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.fullname}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(item)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteUser(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {editUser && (
          <div className="edit-box">
            <h3>Update User</h3>

            <form onSubmit={updateUser}>
              <div className="edit">
                <input
                  type="text"
                  name="fullname"
                  value={editUser.fullname || ""}
                  onChange={handleChange}
                  placeholder="Fullname"
                />

                <input
                  type="text"
                  name="phonenumber"
                  value={editUser.phonenumber || ""}
                  onChange={handleChange}
                  placeholder="Phone"
                />

                <input
                  type="email"
                  name="email"
                  value={editUser.email || ""}
                  onChange={handleChange}
                  placeholder="Email"
                />

                <input
                  type="password"
                  name="password"
                  value={editUser.password || ""}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <button type="submit">Update</button>
                <button type="button" onClick={() => setEditUser(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <h3 className="order-heading">All Order Details</h3>
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Order ID</th>
                <th>User ID</th>
                <th>User Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Food ID</th>
                <th>Food Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Delivery Address</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="15">No Orders Found</td>
                </tr>
              ) : (
                orders.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item._id}</td>
                    <td>{item.userId?._id || "-"}</td>
                    <td>{item.userId?.fullname || "-"}</td>
                    <td>{item.userId?.phonenumber || "-"}</td>
                    <td>{item.userId?.email || "-"}</td>
                    <td>{item.foodId?._id || "-"}</td>
                    <td>{item.foodId?.foodname || "-"}</td>
                    <td>₹{item.foodId?.price || 0}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.totalAmount}</td>
                    <td>{item.deliveryAddress || "-"}</td>
                    <td>{item.status}</td>

                    <td>
                      <select
                        value={item.status || "pending"}
                        onChange={(e) =>
                          updateOrderStatus(item._id, e.target.value)
                        }
                      >
                        <option value="pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="preparing">Preparing</option>
                        <option value="out for delivery">
                          Out for Delivery
                        </option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteOrder(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
