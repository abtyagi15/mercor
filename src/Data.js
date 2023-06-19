
const data = {
  cards: [
    {
      cardType: "To Do",
      numberOfCards: 4,
      subCards: [
        {
          title: "Brainstorming",
          description:
            "Brainstorming brings team members' diverse experience into play.",
          status: "Low",
          comments: "12",
          files: "0",
          invites: [
            {
              id: 1,
              image: "../assests/invites.png",
            },
            {
              id: 2,
              image: "../assests/invites.png",
            },
            {
              id: 3,
              image: "../assests/invites.png",
            },
            {
              id: 4,
              image: "../assests/invites.png",
            },
          ],
        },
        {
          title: "Research",
          description:
            "User research helps you to create an optimal product for users.",
          status: "High",
          comments: "10",
          files: "3",
          invites: [
            {
              id: 1,
              image: "../assests/invites.png",
            },
            {
              id: 2,
              image: "../assests/invites.png",
            },
            {
              id: 3,
              image: "../assests/invites.png",
            },
            {
              id: 4,
              image: "../assests/invites.png",
            },
          ],
        },
      ],
    },
    {
        cardType: "On Progress",
        numberOfCards: 3,
        subCards: [
          {
            title: "Onboarding Illusions",
            description:
              "Brainstorming brings team members' diverse experience into play.",
            status: "low",
            comments: "12",
            files: "0",
            invites: [
              {
                id: 1,
                image: "../assests/invites.png",
              },
              {
                id: 2,
                image: "../assests/invites.png",
              },
              {
                id: 3,
                image: "../assests/invites.png",
              },
            ],
          },
        ],   
    },
    {
        cardType: "Done",
        numberOfCards: 2,
      subCards: [
        {
          title: "Mobile App Design",
          description:
            "Brainstorming brings team members' diverse experience into play.",
          status: "Completed",
          comments: "12",
          files: "0",
          invites: [
            {
              id: 3,
              image: "../assests/invites.png",
            },
            {
              id: 4,
              image: "../assests/invites.png",
            },
          ],
        },
      ],
    }
  ],
};

export default data;
