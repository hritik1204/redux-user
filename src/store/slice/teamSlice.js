import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "team",
  initialState: {
    members: [],
  },
  reducers: {
    addToTeam: (state, action) => {
      const addedUser = action.payload;

      const existingUser = state.members.find(
        (member) => member.id === addedUser.id
      );

      if (!existingUser && addedUser.available) {
        if (state.members.length === 0) {
          state.members.push({
            id: addedUser.id,
            firstName: addedUser.firstName,
            lastName: addedUser.lastName,
            gender: addedUser.gender,
            domain: addedUser.domain,
            email: addedUser.email,
            availability: addedUser.available,
            avatar: addedUser.avatar,
            selected: true,
          });
        } else {
          const domainExists = state.members.some(
            (user) => user.domain === addedUser.domain
          );

          if (!domainExists) {
            state.members.push({
              id: addedUser.id,
              firstName: addedUser.firstName,
              lastName: addedUser.lastName,
              gender: addedUser.gender,
              domain: addedUser.domain,
              email: addedUser.email,
              availability: addedUser.available,
              avatar: addedUser.avatar,
              selected: true,
            });
          } else {
            alert(
              `User with domain '${addedUser.domain}' already exist, try add user with different domain`
            );
          }
        }
      } else {
        alert(
          `${addedUser.firstName} is already in the team or she is not available`
        );
      }
    },
    removeToTeam: (state, action) => {
      const memberId = action.payload;
      state.members = state.members.filter((member) => member.id !== memberId);
    },
  },
});

export const teamAction = teamSlice.actions;
export default teamSlice.reducer;
