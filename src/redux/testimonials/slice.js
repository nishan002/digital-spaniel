import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

function generateFakeTestimonials(count = 6) {
  return Array.from({ length: count }).map(() => ({
    text: faker.lorem.sentences(2),
    name: faker.person.fullName(),
    title: `${faker.person.jobTitle()}, ${faker.company.name()}`,
    img: faker.image.avatar(), // random avatar url
  }));
}

const initialState = generateFakeTestimonials(6);

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;
