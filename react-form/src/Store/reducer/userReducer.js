const DEFAULT_STATE = {
  userList: [
    {
      id: 1,
      fullName: "Hùng Nguyễn",
      email: "hung123@gmail.com.vn",
      phone: 123456789,
    },
  ],
};
export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
