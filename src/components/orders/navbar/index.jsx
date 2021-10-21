import React from "react";
import { ReactComponent as SearchIcon } from "../../../asstets/icons/search.svg";
import NotificationIcon from "../../../asstets/icons/orders.svg";
import avatar from "../../../asstets/images/avatar.png";
import { ReactComponent as DownIcon } from "../../../asstets/icons/down.svg";
import { DashboardNavbarCard, Notification, Profile, Search } from "./styles";

function OrderNavbar() {
  return (
    <DashboardNavbarCard>
      <Search>
        <form>
          <input type="text" placeholder="Search Product" required />
          <button>
            <SearchIcon />
          </button>
        </form>
      </Search>
      <Notification>
        <div>
          <img src={NotificationIcon} alt="icon" />
        </div>
      </Notification>
      <Profile>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <div>
          <p>khisrav</p>
          <p>abdulazizov</p>
        </div>
        <div>
          <DownIcon />
        </div>
      </Profile>
    </DashboardNavbarCard>
  );
}

export default OrderNavbar;
