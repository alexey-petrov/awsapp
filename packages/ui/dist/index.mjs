// components/shell.tsx
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme
} from "@mantine/core";

// hooks/useAppShell.ts
import create from "zustand";
import { persist } from "zustand/middleware";
var useAppShell = create(
  persist(
    (set) => ({
      user: null,
      score: 0,
      setUser: (user) => set(() => ({ user })),
      addToScore: (amount) => set((state) => ({ score: state.score + amount }))
    }),
    { name: "app-shell" }
  )
);

// components/shell.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Shell = ({ title, children }) => {
  const { user, score, setUser } = useAppShell();
  const theme = useMantineTheme();
  return /* @__PURE__ */ jsx(AppShell, {
    padding: "md",
    styles: {
      main: {
        background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
      }
    },
    header: /* @__PURE__ */ jsxs(Header, {
      height: 60,
      p: "xs",
      style: {
        display: "flex",
        background: theme.colors.blue[8]
      },
      children: [
        /* @__PURE__ */ jsx(Title, {
          style: {
            color: "white"
          },
          children: title
        }),
        /* @__PURE__ */ jsx(Box, {
          sx: { flexGrow: 1 }
        }),
        user && /* @__PURE__ */ jsxs(Box, {
          sx: { display: "flex" },
          children: [
            /* @__PURE__ */ jsxs(Title, {
              mr: "md",
              style: {
                color: "white"
              },
              children: [
                user,
                " - ",
                score
              ]
            }),
            /* @__PURE__ */ jsx(Button, {
              variant: "light",
              onClick: () => setUser(null),
              children: "Logout"
            })
          ]
        }),
        !user && /* @__PURE__ */ jsx(Button, {
          variant: "light",
          onClick: () => setUser("Jack"),
          children: "Login"
        })
      ]
    }),
    children
  });
};

// Button.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Button2 = () => {
  return /* @__PURE__ */ jsx2("div", {
    children: /* @__PURE__ */ jsx2("button", {
      children: "Boop"
    })
  });
};
export {
  Button2 as Button,
  Shell,
  useAppShell
};
