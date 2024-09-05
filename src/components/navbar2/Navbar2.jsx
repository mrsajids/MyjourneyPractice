import "./navbar.scss"
const Navbar2 = () => {
  return (
    <div>
      <nav className="mynav">
        <ul>
          <li>
            <span class="material-icons-outlined"> notifications </span>
          </li>
          <li>
            <span class="material-icons-outlined"> favorite_border </span>
          </li>
          <li>
            <span class="material-icons-outlined"> shopping_cart </span>
          </li>
          <li>
            <img src="images/profile.png" class="profile" />
            <ul>
              <li class="sub-item">
                <span class="material-icons-outlined"> grid_view </span>
                <p>Dashboard</p>
              </li>
              <li class="sub-item">
                <span class="material-icons-outlined">
                  format_list_bulleted
                </span>
                <p>My Orders</p>
              </li>
              <li class="sub-item">
                <span class="material-icons-outlined"> manage_accounts </span>
                <p>Update Profile</p>
              </li>
              <li class="sub-item">
                <span class="material-icons-outlined"> logout </span>
                <p>Logout</p>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar2