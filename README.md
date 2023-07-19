# Data Analyis and Visualization of Pokémon Dataset

In this project, we performed data analysis of Pokémon dataset. We created
data visualizations using Tableau and also a web application that tell the Pokémon story & highlight patterns to reveal insights from the dataset provided.

**Pokémon dataset used**:
[www.kaggle.com/datasets/rohanpatil63/pokemon-dataset](https://www.kaggle.com/datasets/rohanpatil63/pokemon-dataset)

**You can view the client side app here**:
[https://advs-angelhack.vercel.app/](https://advs-angelhack.vercel.app/)

## Installation

This project contains Typescript files, JS libraries and stylesheets. To run it
locally, clone this github repo, go into the project directory and install the
dependencies. The Visualization on this readme is generated using Tableau

Clone the project

```bash
  $ git clone https://github.com/iamendy/pokemon.git
```

Go to the project directory

```bash
  $ cd pokemon
```

Install dependencies

```bash
  $ npm install
```

Start the server

```bash
  $ npm run dev
```


## Data Story

#### Introduction

In the world of Pokémon, different types have unique characteristics and
strengths. Using the provided Pokémon dataset (link is above), we will delve
into the characteristics of Pokémon based on their types, focusing on key
attributes such as HP, Attack, Defense, Special Attack, Special Defense, and
Speed. By visualizing the type distribution and analyzing type matchups, we aim
to uncover insights into their strengths, gain a deeper understanding of Pokémon
battles and how they vary based on their type classification.

#### Visualization 1: Type Distribution

To begin our analysis, let's create a bar chart to visualize the distribution of
Pokémon types. The X-axis will represent the different types, while the Y-axis
will indicate the count or proportion of Pokémon belonging to each type. This
visualization will provide an overview of the prevalence of different types
within the Pokémon dataset.

![Type Distribution Bar Chart](/public/img/typeDistribution.png)

**Insight:** The bar chart will reveal the most common and rare types among
Pokémon. We might find that certain types, such as Normal or Water, are more
prevalent, while others, like Flying or Fairly are less common. This insight can
inform trainers about the diversity of types they may encounter in battles.

#### Visualization 2: Type Comparison

Next, let's create a stacked bar chart to compare the average stats of Pokémon
types side by side. Each bar will represent a type, and the stacked segments
within each bar will correspond to different attributes (HP, Attack, Defense,
Special Attack, Special Defense, and Speed).

![Type Comparison Stacked Bar Chart](/public/img/typeComparison.png)

**Insight:** The stacked bar chart will allow us to compare the overall
performance of types across multiple attributes. By observing the relative
heights of the stacked segments, we can identify which types have the highest
average stats overall and which ones may have more balanced attributes. For
example, Dragon-type Pokémon have the highest overall stats (with Attack and
Special Attack leading the front), Bug-type Pokémon have the least average stats
attributes, while the Steel-type Pokémon exhibit high defense. This information
can guide trainers in selecting types that align with their preferred playstyle.

#### Visualization 3: Type Combination

Lastly, To further understand the diversity of Pokémon types, let's create a
bubble chart to visualize the frequency of different type combinations. Each
bubble represents a unique type combination, with the size of the bubble
indicating the count of Pokémon with that specific combination. This
visualization will illustrate the variety and popularity of type combinations.

![Type Comparison Stacked Bar Chart](/public/img/typeCombination.png)

**Insight:** The bubble chart will reveal the most common and rare type
combinations in the Pokémon dataset. We might find that certain combinations,
such as Normal-Flying, Grass-Poison & Bug-Flying, are more prevalent, while
others, like Electric-Dragon, Ghost-Fighting, etc are less common. It also shows
there are only 50 extremely rare combination types with only one occurrence.
This insight can help trainers in identifying unique or niche type combinations
for their teams.

#### **Conclusion**

Through these visualizations, we have gained valuable insights into the world of
Pokémon. We discovered the distribution of different types, compared their
attribute stats, and analyzed their overall strengths.

These visualizations can assist trainers and enthusiasts in making strategic
informed decisions when building their teams, understanding type matchups, and
exploring the diverse characteristics of Pokémon when preparing for battles.

Remember, a thorough understanding of attribute distribution and type-specific
strengths can significantly impact the success of Pokémon trainers and increase
the chances of victory in Pokémon battles.

## Thought Process

The thought process behind this data story is to leverage the information
available in the Pokémon CSV file by **Rohan Patil** to explore and analyze the
attributes of Pokémon based on their types. The goal is to uncover insights and
patterns that can help trainers make informed decisions when building their
teams and strategizing battles.

- #### Selecting Relevant Attributes:
  The attributes chosen for analysis (HP, Attack, Defense, Special Attack,
  Special Defense, and Speed) are key indicators of a Pokémon's combat
  abilities.
- #### Choosing Visualization Techniques:
  To effectively convey the information and facilitate comparisons, a
  combination of bar chart, stacked bar chart, and bubble chart are selected
  as appropriate visualization techniques. Each technique serves a specific
  purpose: bar charts for comparing type distributions, stacked bar charts for
  overall average attribute stats, and bubble chart for comparing frequency of
  type1 and type2 combinations.
- #### Uncovering Insights:
  By examining the visualizations, trainers can identify which types excel in
  specific attributes, which types have balanced performance across multiple
  attributes, and which types exhibit variability in attribute distribution. .
- #### Empowering Decision-Making:
  The ultimate objective of this data story is to empower trainers to make
  better decisions based on the analyzed information. By understanding the
  different types and their attribute distributions, trainers can
  strategically assemble teams that capitalize on type advantages and increase
  their chances of success in the battle field.

By following this thought process, the data story provides trainers with
actionable insights derived from the Pokémon CSV file, allowing them to approach
battles with a more informed and strategic mindset.

## Algorithms / Libraries Used For Visualization

Visualizations used in this project is created using:

- Tableau - For data analysis
- ChartJS library - For client side code

## Screen Recording of the Visualization

https://github.com/iamendy/pokemon/assets/22240834/8d47ff4c-1ffa-459b-9fbe-629c540e27dd

## Client Side App
https://github.com/iamendy/pokemon/assets/22240834/eb164884-52cc-4913-ab23-4e4d858d889e

View it here: [https://advs-angelhack.vercel.app/](https://advs-angelhack.vercel.app/)
