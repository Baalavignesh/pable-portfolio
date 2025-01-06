import { associate, practitioner } from "../static";


let badges:IAchievements[] = [
    {
        title: "AWS Certified Solutions Architect",
        image: associate.src,
        link: "https://www.credly.com/badges/60a34dc7-0735-41fb-b92c-930fc9922bae/linked_in_profile"
      },
      {
        title: "AWS Certified Cloud Practitioner",
        image: practitioner.src,
        link: "https://www.credly.com/badges/1e437970-3a19-47c8-955e-ccd11a9974cd/linked_in_profile"
      },

]

let achievements: IAchievements[]= [
    {
        title: "Story3 Hackathon",
        award: "Best Prototype Award",
        link: "https://story3.hackerearth.com/"
      },
      {
        title: "DataPalooza",
        award: "Honorable Mentions",
        link: "https://devpost.com/software/healthhub-0czr47"
      },
]

export { badges, achievements };