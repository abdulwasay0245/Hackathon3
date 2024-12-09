
import { Inter , DM_Sans, Roboto , Open_Sans , Poppins , } from "next/font/google"


const InterFont = Inter({ subsets: ["latin"] });
const DmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700" , "500"] });
const roboto = Roboto({
  weight: ['400','500', '700'],
  subsets: ['latin'],
});

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const poppin = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export { InterFont, DmSans, roboto, openSans, poppin };