import { Help } from "@/env";

const Step1Help: Help[] = [
    {
        heading: "What kind of idea?",
        explanation: `The kind of idea you should try to examine here should be one that can be objectively measured. Thus,  
        evidence can be used to weigh the merit of the claim. Claims that come down to personal
        preferences are too subjective to assess.`,
    },
    {
        heading: "Examples",
        explanation: `For instance, you could look into a common idea such as 'The president is to blame for high gas prices'. 
        This is a claim we can gather evidence to support or reject it.`
    }

];


const Step2Help: Help[] = [
    {
        heading: 'What to do here?',
        explanation: `Here you're going to select first what your personal perspective is on the idea you entered in the previous step. Just 
         Select whether you agree with it, disagree or even have no opinion on the matter(in which case you'll select 'Neutral'). Then select what 
         level of prior knowledge you have on the idea you entered in the previous step.
         `

    },
    {
        heading: "Why is this important?",
        explanation: `To have an honest inquiry, we must acknowledge what our personal beliefs are before we dig in.
    If we don't reflect on how we feel about a topic, or the parties involved, we're more likely to search only for 
    what would reinforce our existing belief. Our desire to reaffirm what we already believe can pull us towards a 
    conclusion before we can actually support it.`
    }]


const Step3Help: Help[] = [{
    heading: "What is the purpose of this?",
    explanation: `Biases( i.e. our emotional investment) can drive us to seek out selective evidence and miss the big picture. As human beings we're driven to things
    that make us feel good, not necessarily finding the truth.`
}]


const Step4Help: Help[] = [{
    heading: "What is this asking me?",
    explanation: `What conditions must be met in order for the idea you're investigating to have merit? And if you're tackling a rather 
    big and broad idea, think of this step as a way to break down that idea into smaller questions. Those smaller ideas make up the premises 
    that support the claim.`
},
{
    heading: "Examples",
    explanation: `For example, if we're looking into the idea 'Flossing your teeth is unncessesary', we would need to 
    find evidence for the underlying idea that flossing your teeth doesn't have much benefit to your dental health. `
}
]



const Step5Help: Help[] = [{
    heading: "What exaclty am I looking for?",
    explanation: `While we're searching for evidence, intentionally seeking an answer for the premises — what must be true to support the idea —   is the 
    most direct persuit of the truth. What we as human beings tend to look for is what will make us feel good/what we ~want~ to be true. But we're not typically wired to be 
    perfectly rational truth seeking machines. `
}]

const SummaryHelp: Help[] = [{
    heading: "What do I do when I'm done reading?",
    explanation: "On the panel of buttons at the bottom of the screen (bottom left if using a desktop) click the blue checkmark button when you're finished reading"
}]

const ResearchHelp: Help[] = [{
    heading: "Help",
    explanation: "Select whether you felt the Idea or premises you investigated were supported by the evidence you could find"
}]



export { Step1Help, Step2Help, Step3Help, Step4Help, Step5Help, SummaryHelp, ResearchHelp };




