const setUser = (userDetails) => {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
};

const getUser = () => {
  let userDetails = localStorage.getItem("userDetails");

  let res;
  if (userDetails !== null && userDetails !== undefined) {
    try {
      res = JSON.parse(userDetails);
    } catch (error) {
      res = "undefined";
    }
  } else {
    res = "undefined";
  }

  return res;
};

export { setUser, getUser };

// useEffect(() => {
//   function buildMenu(menuItems, parentElement) {
//     menuItems.forEach((item) => {
//       const menuItem = document.createElement("div");
//       menuItem.textContent = item.sectionName;
//       menuItem.classList.add("menu-item");

//       if (item.subsections.length > 0) {
//         menuItem.classList.add("has-submenu");
//         const submenu = document.createElement("div");
//         submenu.classList.add("submenu");
//         buildMenu(item.subsections, submenu);
//         menuItem.appendChild(submenu);
//       }

//       parentElement.appendChild(menuItem);
//     });
//   }

//   const sideMenu = document.createElement("div");
//   sideMenu.classList.add("side-menu");
//   buildMenu(
//     [
//       {
//         sectionName: "Main",
//         subsections: [
//           {
//             sectionName: "Dashboard",
//             subsections: [
//               { sectionName: "Admin Dashboard", subsections: [] },
//               { sectionName: "Employee Dashboard", subsections: [] },
//             ],
//           },
//         ],
//       },
//       {
//         sectionName: "Chat",
//         subsections: [
//           {
//             sectionName: "Video Call",
//             subsections: [],
//           },
//           {
//             sectionName: "Voice Call",
//             subsections: [
//               { sectionName: "Voice call 1", subsections: [] },
//               { sectionName: "Voice call 2", subsections: [] },
//               { sectionName: "Voice call 3", subsections: [] },
//             ],
//           },
//           {
//             sectionName: "Calling",
//             subsections: [
//               { sectionName: "call 1", subsections: [] },
//               { sectionName: "call 2", subsections: [] },
//               { sectionName: "  call 3", subsections: [] },
//             ],
//           },
//         ],
//       },
//     ],
//     sideMenu
//   );
//   document.body.appendChild(sideMenu);
// }, []);
