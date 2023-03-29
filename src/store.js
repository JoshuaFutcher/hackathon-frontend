import { create } from 'zustand';

const colorMap = {
  'green': "120deg 30% 61%",
  'blue': "288deg 30% 61%",
  'yellow': "30deg 30% 61%",
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const useStore = create(set => ({
  collections: {
    byId: {
      "primary-school": {
        id: "primary-school",
        name: "Primary school",
        color: colorMap.green,
        categories: ["primary-school"],
      },
      "secondary-school": {
        id: "secondary-school",
        name: "Secondary school",
        color: colorMap.yellow,
        categories: [],
      },
      "college": {
        id: "college",
        name: "College",
        color: colorMap.blue,
        categories: [],
      }
    },
    entities: [
      "primary-school",
      "secondary-school",
      "college"
    ],
  },
  categories: {
    byId: {
      "maths": {
        name: "Maths",
      },
      "primary-school": {
        name: "Primary School",
      },
    },
    entities: [
      "maths",
      "primary-school"
    ],
  },
  tokens: {
    byId: {
      "shapes": {
        id: "shapes",
        name: "Shapes",
        image: "/tokens/primary_school_shapes_icon.png",
        owner: "Joshua Futcher",
        description: "Primary school shapes module.",
        categories: ["primary-school", "maths"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
      "arithmetic": {
        id: "arithmetic",
        name: "Arithmetic",
        image: "/tokens/primary_school_shapes_icon.png",
        owner: "Joshua Futcher",
        description: "Primary school arithmetic module.",
        categories: ["primary-school", "maths"],
        dateCreated: randomDate(new Date(2022, 0, 1), new Date()),
      },
    },
    entities: [
      "shapes",
      "arithmetic"
    ],
    updateToken: (token) => set(state => ({
      tokens: {
        ...state.tokens,
        byId: {
          ...state.tokens.byId,
          [token.id]: token
        },
      }
    })),
  },
  findEntity: (section, predicate) => {
    return section.entities
      .map(id => section.byId[id])
      .filter(predicate)
  },
}));

export default useStore;