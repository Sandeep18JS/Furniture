import img from "../../public/products/Img.png";
import img1 from "../../public/products/Img1.png";
import img2 from "../../public/products/Img2.png";
import img3 from "../../public/products/Img3.png";
import img4 from "../../public/products/Img4.png";
import img5 from "../../public/products/Img5.png";
import { StaticImageData } from "next/image";
import {
  CreditCard,
  Earth,
  Headset,
  LucideIcon,
  Mail,
  ReceiptText,
  Truck,
} from "lucide-react";
export { img, img1, img2, img3, img4, img5 };

type items = {
  img: StaticImageData;
  name: string;
  price: string;
};

export const Items: items[] = [
  {
    img: img,
    name: "URBAN LUX HIGH CHAIR",
    price: "$2668.15",
  },
  {
    img: img1,
    name: "MORDERN BLACK HANGING LIGHT",
    price: "$1595.6",
  },
  {
    img: img2,
    name: "METRO FUSION TABLE ",
    price: "$2238.30",
  },
  {
    img: img3,
    name: "LUMIN DESK LAMP",
    price: "$1477.80",
  },
  {
    img: img4,
    name: "TIMELESS EDGE HANGING CLOCK",
    price: "$1071.6",
  },
  {
    img: img5,
    name: "ZENITH PENDANT LIGHT",
    price: "$2069.59",
  },
];

type Props = {
  heading: string;
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  link5: string;
};

export const links: Props[] = [
  {
    heading: "CUSTOMER SERVICE",
    link1: "Help & FAQs",
    link2: "Return & Refund",
    link3: "Shipping Policy",
    link4: "Customs and Taxes",
    link5: "Customers’s Reviews",
  },
  {
    heading: "COMPANY",
    link1: "About Japan with love",
    link2: "Contact Us",
    link3: "Special Deals & Offers",
    link4: "Terms of Service",
    link5: "Privacy Policy",
  },
  {
    heading: "HELP CENTER",
    link1: "Order Information",
    link2: "Shipping Options",
    link3: "International Shipping",
    link4: "Payment Options",
    link5: "",
  },
  {
    heading: "RETURN & WARRANTLY",
    link1: "Returns & Exchange Policy",
    link2: "Returns Center",
    link3: "Warranty Policy",
    link4: "Warranty Registration",
    link5: "Warranty Repair Center",
  },
];

type whys = {
  icon: LucideIcon;
  title: string;
  description: string;
};
export const whys: whys[] = [
  {
    icon: Earth,
    title: "GLOBAL DELIVERY",
    description:
      "Experience Hassle-Free Shipping and Seamless Global Connectivity with Our Trustworthy and Efficient Delivery Service, Bringing the World to Your Fingertips!",
  },
  {
    icon: Truck,
    title: "FREE SHIPPING",
    description:
      "Shop to Your Heart's Content Without Worrying About Shipping Costs: Our Free Shipping Service Delivers Your Purchases with a Smile, Straight to Your Doorstep!",
  },
  {
    icon: Headset,
    title: "24/7 SUPPORTING",
    description:
      "Shop with Confidence Anytime, Anywhere: Our Free Shipping Service Comes with 24/7 Support to Ensure Your Packages Arrive Safely and On Time!",
  },
  {
    icon: Mail,
    title: "DAILY EMAIL",
    description:
      "Stay Up-to-Date with Your Deliveries: Enjoy the Convenience of Daily Email Updates with Our Free Shipping Service, Making Your Online Shopping Experience Even More Enjoyable!",
  },
  {
    icon: CreditCard,
    title: "EASY PAYMENT",
    description:
      "Shop and Pay with Ease: Our Free Shipping Service Not Only Delivers Your Packages for Free, but Also Offers Easy Payment Options, Making Your Shopping Experience a Breeze!",
  },
  {
    icon: ReceiptText,
    title: "MONTHLY  VOUCHER",
    description:
      "More Than Just Free Shipping: Our Service Rewards Your Loyalty with Monthly Vouchers, Giving You More Reasons to Shop and Save on Your Favorite Products!",
  },
];
