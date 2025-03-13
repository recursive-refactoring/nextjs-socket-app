import { SnackBarProvider } from "@/providers/snackbar.provider";
import { UiThemeProvider } from "@/providers/ui-theme-provider";
import store from "@/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DM_Sans } from "next/font/google";
import { Provider } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${dmSans.style.fontFamily};
        }
      `}</style>
      <>
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <UiThemeProvider>
              <SnackBarProvider>{children}</SnackBarProvider>
            </UiThemeProvider>
          </LocalizationProvider>
        </Provider>
      </>
    </>
  );
}
