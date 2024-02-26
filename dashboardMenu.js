let menuItems = [
  {
    sectionName: "Main",
    subsections: [
      {
        sectionName: "Dashboard",
        subsections: [
          { sectionName: "Admin Dashboard", subsections: [] },
          { sectionName: "Employee Dashboard", subsections: [] },
        ],
      },
    ],
  },
  {
    sectionName: "Chat",
    subsections: [
      {
        sectionName: "Video Call",
        subsections: [
          { sectionName: "Admin Dashboard", subsections: [] },
          { sectionName: "Employee Dashboard", subsections: [] },
        ],
      },
      {
        sectionName: "Voice Call",
        subsections: [
          { sectionName: "Voice call 1", subsections: [] },
          { sectionName: "Voice call 2", subsections: [] },
          { sectionName: "Voice call 3", subsections: [] },
        ],
      },
      {
        sectionName: "Calling",
        subsections: [
          { sectionName: "call 1", subsections: [] },
          { sectionName: "call 2", subsections: [] },
          { sectionName: "  call 3", subsections: [] },
        ],
      },
    ],
  },
];

menuItems.forEach((el) => {
  console.log(el);
});
