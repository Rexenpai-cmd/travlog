import airbnb from "../assets/companies/airbnb.png";
import booking from "../assets/companies/booking.com.png";
import expedia from "../assets/companies/expedia.png";
import orbitz from "../assets/companies/orbitz.png";
import tripadvisor from "../assets/companies/tripadvisor.png";

import service1 from "../assets/services/services1.png";
import service2 from "../assets/services/services2.png";
import service3 from "../assets/services/services3.png";

import destination1 from "../assets/destination/destination-image1.png";
import destination2 from "../assets/destination/desination-image2.png";
import destination3 from "../assets/destination/desination-image3.png";

import feature1 from "../assets/svg/location-white.svg";
import feature2 from "../assets/svg/calendar.svg";
import feature3 from "../assets/svg/coupon.svg";

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
    { id: "c4", title: "Tripadvisor", url: tripadvisor },
    { id: "c5", title: "Orbitz", url: orbitz },
];

export const categories = [
    {
        id: "1",
        label: "Best Tour Guide",
        text: "What looked like a small patch of purple grass, above five feet.",
        img: service3,
    },
    {
        id: "2",
        label: "Easy Booking",
        text: "Square, was moving across the sand in their direction.",
        withShadow: true,
        img: service2,
    },
    {
        id: "3",
        label: "Weather Forecast",
        text: "What looked like a small patch of purple grass, above five feet.",
        img: service1,
    },
];

export const destination = [
    {
        id: "1",
        url: destination1,
        title: "Paradise Beach, Bantayan Island",
        price: "550.16",
        location: "Rome, Italy",
        ratings: "4.8",
    },
    {
        id: "2",
        url: destination2,
        title: "Ocean full of Colors",
        price: "22.99",
        location: "Maldives",
        ratings: "4.5",
    },
    {
        id: "3",
        url: destination3,
        title: "Mountain View, Above the Clouds",
        price: "150.99",
        location: "United Arab Emerites",
        ratings: "5.0",
    },
];

export const count = [
    {
        count: "500+",
        label: "Holiday Package",
    },
    {
        count: "100",
        label: "Luxury Hotel",
    },
    {
        count: "7",
        label: "Premium Airlines",
    },
    {
        count: "2k+",
        label: "Happy Customer",
    },
];

export const features = [
    {
        bg: "bg-orange",
        svg: feature1,
        title: "We offer best services",
        text: "Lorem Ipsum is not simply random text",
    },
    {
        bg: "bg-yellow",
        svg: feature2,
        title: "Schedule your trip",
        text: "It has roots in a piece of classical",
        withBorder: true,
    },
    {
        bg: "bg-secondary",
        svg: feature3,
        title: "Get discounted coupons",
        text: "Lorem Ipsum is not simply random text",
    },
];
