import airbnb from "../assets/companies/airbnb.png";
import booking from "../assets/companies/booking.com.png";
import expedia from "../assets/companies/expedia.png";
import orbitz from "../assets/companies/orbitz.png";
import tripadvisor from "../assets/companies/tripadvisor.png";

export const navigation = [
    {
        id: "1",
        title: "Home",
        url: "#home",
    },
    {
        id: "2",
        title: "Discover",
        url: "#discover",
    },
    {
        id: "3",
        title: "Special Deals",
        url: "#special",
    },
    {
        id: "4",
        title: "Contact",
        url: "#contact",
    },
    {
        id: "5",
        title: "Log In",
        url: "#login",
        isMobile: true,
    },
    {
        id: "6",
        title: "Sign Up",
        url: "#signup",
        isMobile: true,
    },
];

export const companies = [
    { id: "c1", title: "Airbnb", url: airbnb },
    { id: "c2", title: "Booking.com", url: booking },
    { id: "c3", title: "Expedia", url: expedia },
    { id: "c4", title: "Orbitz", url: orbitz },
    { id: "c5", title: "Tripadvisor", url: tripadvisor },
];
