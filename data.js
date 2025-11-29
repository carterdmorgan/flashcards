// Senators data
const senatorsData = [
    {
        "name": "Tommy Tuberville",
        "state": "Alabama",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Tommy_tuberville.jpg/960px-Tommy_tuberville.jpg",
        "funFacts": [
            "Former head football coach at Auburn University",
        ]
    },
    {
        "name": "Katie Britt",
        "state": "Alabama",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Katie_Britt.jpg/500px-Katie_Britt.jpg",
        "funFacts": [
            "Chief of Staff to Richard Shelby, the previous senator"
        ]
    },
    {
        "name": "Lisa Murkowski",
        "state": "Alaska",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/President_Joe_Biden_signs_the_Alaska_Tourism_Restoration_Act_into_law_%28cropped%29.jpg",
        "funFacts": [
            "Due to Alaska's Ranked Choice Voting, she often wins by a coalition of Democrats and modern Republicans",
            "Lost the Republican primary in 2010 to a Tea Party candidate and won as a write-in"
        ]
    },
    {
        "name": "Dan Sullivan",
        "state": "Alaska",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Senator_Dan_Sullivan_official_%28cropped%29.jpg/250px-Senator_Dan_Sullivan_official_%28cropped%29.jpg",
        "funFacts": [
            "Former Attorney General of Alaska"
        ]
    },
    {
        "name": "Mark Kelly",
        "state": "Arizona",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mark_Kelly%2C_Official_Portrait_117th_%28cropped%29_2.jpg/250px-Mark_Kelly%2C_Official_Portrait_117th_%28cropped%29_2.jpg",
        "funFacts": [
            "Former astronaut",
            "Married to Gabby Giffords, former US representative from Arizona who was almost assassinated"
        ]
    },
    {
        "name": "Ruben Gallego",
        "state": "Arizona",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Senator_Ruben_Gallego_Official_Portrait.jpg/500px-Senator_Ruben_Gallego_Official_Portrait.jpg",
        "funFacts": [
            "Contemporary of Pete Buttigieg and Matt Yglesias while at Harvard"
        ]
    },
    {
        "name": "John Boozman",
        "state": "Arkansas",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Senator_John_Boozman_Official_Portrait_%28115th_Congress%29_%28cropped%29.jpg/250px-Senator_John_Boozman_Official_Portrait_%28115th_Congress%29_%28cropped%29.jpg",
        "funFacts": [
            "Only the second Republican to be elected to the US Senate from Arkansas since Reconstruction",
            "Played football for University of Arkansas"
        ]
    },
    {
        "name": "Tom Cotton",
        "state": "Arkansas",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tom_Cotton_official_Senate_photo_%28cropped%29.jpg/250px-Tom_Cotton_official_Senate_photo_%28cropped%29.jpg",
        "funFacts": [
            "Received major backlash in 2020 for his NYT Op ed Send In The Troops"
        ]
    },
    {
        "name": "Alex Padilla",
        "state": "California",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Alex_Padilla_117th_Congress_portrait_%283%29_%28crop%29.jpg/250px-Alex_Padilla_117th_Congress_portrait_%283%29_%28crop%29.jpg",
        "funFacts": [
            "Replacement for Kamala Harris, who was elected to the Vice Presidency"
        ]
    },
    {
        "name": "Adam Schiff",
        "state": "California",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Schiff_Adam_119th_Congress_%28close_crop%29.jpg/250px-Schiff_Adam_119th_Congress_%28close_crop%29.jpg",
        "funFacts": [
            "Served as the lead impeachment manager for the Trump's first impeachment"
        ]
    },
    {
        "name": "Michael Bennet",
        "state": "Colorado",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Senator_Mike_Bennett_%284x5_crop%29.jpg/250px-Senator_Mike_Bennett_%284x5_crop%29.jpg",
        "funFacts": [
            "Ran for President in 2020"
        ]
    },
    {
        "name": "John Hickenlooper",
        "state": "Colorado",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/John_Hickenlooper%2C_official_portrait%2C_117th_Congress_%284x5_crop%29.jpeg/250px-John_Hickenlooper%2C_official_portrait%2C_117th_Congress_%284x5_crop%29.jpeg",
        "funFacts": [
            "Former Governor of Colorado"
        ]
    },
    {
        "name": "Richard Blumenthal",
        "state": "Connecticut",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Richard_Blumenthal_Official_Portrait_%284x5_crop%29.jpg/250px-Richard_Blumenthal_Official_Portrait_%284x5_crop%29.jpg",
        "funFacts": []
    },
    {
        "name": "Chris Murphy",
        "state": "Connecticut",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chris_Murphy%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/250px-Chris_Murphy%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Chris Coons",
        "state": "Delaware",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chris_Coons%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/250px-Chris_Coons%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Lisa Blunt Rochester",
        "state": "Delaware",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Senator_Blunt_Rochester_Official_Portrait_%28cropped%29.jpg/250px-Senator_Blunt_Rochester_Official_Portrait_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Rick Scott",
        "state": "Florida",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Official_Portrait_of_Senator_Rick_Scott_%28cropped%29.jpg/250px-Official_Portrait_of_Senator_Rick_Scott_%28cropped%29.jpg",
        "funFacts": [
            "Former Governor of Florida"
        ]
    },
    {
        "name": "Ashley Moody",
        "state": "Florida",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Official_Portrait_of_Senator_Ashley_Moody_%28cropped%29.jpg/250px-Official_Portrait_of_Senator_Ashley_Moody_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Jon Ossoff",
        "state": "Georgia",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jon_Ossoff_Senate_Portrait_2021_%28cropped%29.jpg/250px-Jon_Ossoff_Senate_Portrait_2021_%28cropped%29.jpg",
        "funFacts": [
            "First millennial senator to be elected to the US Senate"
        ]
    },
    {
        "name": "Raphael Warnock",
        "state": "Georgia",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Raphael_Warnock_official_photo_%284x5_crop%29.jpg/250px-Raphael_Warnock_official_photo_%284x5_crop%29.jpg",
        "funFacts": [
            "Pastor of the historic Ebenezer Baptist Church in Atlanta, Georgia",
            "Had the good fortune to run against Herschel Walker"
        ]
    },
    {
        "name": "Brian Schatz",
        "state": "Hawaii",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Brian_Schatz%2C_official_portrait%2C_113th_Congress_2_%28cropped%29.jpg/250px-Brian_Schatz%2C_official_portrait%2C_113th_Congress_2_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Mazie Hirono",
        "state": "Hawaii",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mazie_Hirono%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/250px-Mazie_Hirono%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Mike Crapo",
        "state": "Idaho",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Mike_Crapo_Official_Photo_110th_Congress.jpg/250px-Mike_Crapo_Official_Photo_110th_Congress.jpg",
        "funFacts": []
    },
    {
        "name": "Jim Risch",
        "state": "Idaho",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jim_Risch_official_portrait_%28cropped%29.jpg/250px-Jim_Risch_official_portrait_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Dick Durbin",
        "state": "Illinois",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dick_Durbin_2022_official_portrait_%28cropped%29_2.jpg/250px-Dick_Durbin_2022_official_portrait_%28cropped%29_2.jpg",
        "funFacts": []
    },
    {
        "name": "Tammy Duckworth",
        "state": "Illinois",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tammy_Duckworth_115th_official_portrait_%28cropped%29.jpg/250px-Tammy_Duckworth_115th_official_portrait_%28cropped%29.jpg",
        "funFacts": [
            "Amputated her legs during the Iraq War"
        ]
    },
    {
        "name": "Todd Young",
        "state": "Indiana",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Sen._Todd_Young_official_photo_%28cropped%29.jpg/250px-Sen._Todd_Young_official_photo_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Jim Banks",
        "state": "Indiana",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Jim_Banks_Official_Senate_Portrait_%28cropped%29.jpg/250px-Jim_Banks_Official_Senate_Portrait_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Chuck Grassley",
        "state": "Iowa",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Chuck_Grassley_official_photo_2017_%28cropped%29.jpg/250px-Chuck_Grassley_official_photo_2017_%28cropped%29.jpg",
        "funFacts": [
            "Has been elected to some sort of office in Iowa for more than half the state's existence"
        ]
    },
    {
        "name": "Joni Ernst",
        "state": "Iowa",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Joni_Ernst%2C_official_portrait%2C_116th_Congress_3_%28cropped%29.jpg/250px-Joni_Ernst%2C_official_portrait%2C_116th_Congress_3_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Jerry Moran",
        "state": "Kansas",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Jerry_Moran%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/250px-Jerry_Moran%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Roger Marshall",
        "state": "Kansas",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Roger_Marshall_117th_Congress_portrait_%28cropped%29.jpg/250px-Roger_Marshall_117th_Congress_portrait_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Mitch McConnell",
        "state": "Kentucky",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mitch_McConnell_117th_Congress_photo_%28cropped%29.jpg/250px-Mitch_McConnell_117th_Congress_photo_%28cropped%29.jpg",
        "funFacts": [
            "Former senate majority leader"
        ]
    },
    {
        "name": "Rand Paul",
        "state": "Kentucky",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Rand_Paul%2C_official_portrait%2C_112th_Congress_alternate_%28cropped%29.jpg/250px-Rand_Paul%2C_official_portrait%2C_112th_Congress_alternate_%28cropped%29.jpg",
        "funFacts": [
            "Ran for President in 2016",
            "Son of Ron Paul, a representative from Texas who ran for President in 2012"
        ]
    },
    {
        "name": "Bill Cassidy",
        "state": "Louisiana",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bill_Cassidy_official_Senate_photo_%28cropped%29.jpg/250px-Bill_Cassidy_official_Senate_photo_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "John Kennedy",
        "state": "Louisiana",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/John_Kennedy_official_Senate_photo_%28cropped%29.jpg/250px-John_Kennedy_official_Senate_photo_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Susan Collins",
        "state": "Maine",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Senator_Susan_Collins_2014_official_portrait_%28cropped%29.jpg/250px-Senator_Susan_Collins_2014_official_portrait_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Angus King",
        "state": "Maine",
        "electionYear": 2030,
        "party": "Independent",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Angus_King%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/250px-Angus_King%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Chris Van Hollen",
        "state": "Maryland",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Chris_Van_Hollen_official_portrait_115th_Congress_%28cropped%29.jpg/250px-Chris_Van_Hollen_official_portrait_115th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Angela Alsobrooks",
        "state": "Maryland",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Angela_Alsobrooks_at_a_committee_hearing_%28cropped%29.jpg/250px-Angela_Alsobrooks_at_a_committee_hearing_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Elizabeth Warren",
        "state": "Massachusetts",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Elizabeth_Warren--2016_Official_Portrait--%28cropped%29_%28cropped%29.jpg/250px-Elizabeth_Warren--2016_Official_Portrait--%28cropped%29_%28cropped%29.jpg",
        "funFacts": [
            "Former professor at Harvard"
        ]
    },
    {
        "name": "Ed Markey",
        "state": "Massachusetts",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Edward_Markey%2C_official_portrait%2C_114th_Congress_%28cropped%29.jpg/250px-Edward_Markey%2C_official_portrait%2C_114th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Gary Peters",
        "state": "Michigan",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Gary_Peters_official_photo_115th_congress_%28cropped%29.jpg/250px-Gary_Peters_official_photo_115th_congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Elissa Slotkin",
        "state": "Michigan",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Elissa_Slotkin_119th_Congress_%28cropped%29.jpg/250px-Elissa_Slotkin_119th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Amy Klobuchar",
        "state": "Minnesota",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/250px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg",
        "funFacts": [
            "Was on Biden's shortlist for a Vice Presidential candidate in 2020",
            "Funny story about her getting mad at her aides for not bringing her a fork with her salad so she ate it with a comb"
        ]
    },
    {
        "name": "Tina Smith",
        "state": "Minnesota",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tina_Smith%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/250px-Tina_Smith%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Roger Wicker",
        "state": "Mississippi",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Roger_F._Wicker_crop.jpg/250px-Roger_F._Wicker_crop.jpg",
        "funFacts": []
    },
    {
        "name": "Cindy Hyde-Smith",
        "state": "Mississippi",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Official_headshot_of_US_Senator_Cindy_Hyde-Smith_%28cropped%29.jpg/250px-Official_headshot_of_US_Senator_Cindy_Hyde-Smith_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Josh Hawley",
        "state": "Missouri",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Josh_Hawley%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/250px-Josh_Hawley%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Eric Schmitt",
        "state": "Missouri",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sen._Eric_Schmitt%2C_official_portrait%2C_118th_Congress_%28cropped_2%29.jpg/250px-Sen._Eric_Schmitt%2C_official_portrait%2C_118th_Congress_%28cropped_2%29.jpg",
        "funFacts": []
    },
    {
        "name": "Steve Daines",
        "state": "Montana",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Steve_Daines%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg/250px-Steve_Daines%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Tim Sheehy",
        "state": "Montana",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Sen._Tim_Sheehy%2C_alternate_portrait%2C_119th_Congress_%28cropped%29.jpg/250px-Sen._Tim_Sheehy%2C_alternate_portrait%2C_119th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Deb Fischer",
        "state": "Nebraska",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sen._Deb_Fischer_%28R-NE%29%2C_official_portrait%2C_118th_United_States_Congress_%28cropped%29.jpg/250px-Sen._Deb_Fischer_%28R-NE%29%2C_official_portrait%2C_118th_United_States_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Pete Ricketts",
        "state": "Nebraska",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sen._Pete_Ricketts_official_portrait%2C_118th_Congress_%28cropped%29.jpg/250px-Sen._Pete_Ricketts_official_portrait%2C_118th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Catherine Cortez Masto",
        "state": "Nevada",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Catherine_Cortez_Masto_portrait_red_%28_4x5_crop%29.jpg/250px-Catherine_Cortez_Masto_portrait_red_%28_4x5_crop%29.jpg",
        "funFacts": []
    },
    {
        "name": "Jacky Rosen",
        "state": "Nevada",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Senator_Jacky_Rosen_Official_Portrait_%282022%29_%28cropped%29.jpg/250px-Senator_Jacky_Rosen_Official_Portrait_%282022%29_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Jeanne Shaheen",
        "state": "New Hampshire",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Shaheen_Senate_Portrait_%28cropped%29_%28cropped%29.jpg/250px-Shaheen_Senate_Portrait_%28cropped%29_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Maggie Hassan",
        "state": "New Hampshire",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Maggie_Hassan%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg/250px-Maggie_Hassan%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Cory Booker",
        "state": "New Jersey",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cory_Booker%2C_official_portrait_%28119th_Congress%29_%28cropped%29.jpg/250px-Cory_Booker%2C_official_portrait_%28119th_Congress%29_%28cropped%29.jpg",
        "funFacts": [
            "Former Mayor of Newark, New Jersey"
        ]
    },
    {
        "name": "Andy Kim",
        "state": "New Jersey",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sen_Andy_Kim_118th_Congress_%28cropped%29.jpg/250px-Sen_Andy_Kim_118th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Martin Heinrich",
        "state": "New Mexico",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Heinrich_Official_Headshot_2019_%28cropped%29.jpg/250px-Heinrich_Official_Headshot_2019_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Ben Ray Luján",
        "state": "New Mexico",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ben_Ray_Lujan%2C_117th_Congress_portrait.jpg/250px-Ben_Ray_Lujan%2C_117th_Congress_portrait.jpg",
        "funFacts": []
    },
    {
        "name": "Chuck Schumer",
        "state": "New York",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chuck_Schumer_official_photo_%28cropped%29.jpg/250px-Chuck_Schumer_official_photo_%28cropped%29.jpg",
        "funFacts": [
            "Senate Minority Leader"
        ]
    },
    {
        "name": "Kirsten Gillibrand",
        "state": "New York",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress_%284x5_crop%29.jpg/250px-Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress_%284x5_crop%29.jpg",
        "funFacts": []
    },
    {
        "name": "Thom Tillis",
        "state": "North Carolina",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Sen._Thom_Tillis_official_photo_%28cropped%29.jpg/250px-Sen._Thom_Tillis_official_photo_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Ted Budd",
        "state": "North Carolina",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Senator_Ted_Budd_official_portrait_%28cropped_2%29.jpg/250px-Senator_Ted_Budd_official_portrait_%28cropped_2%29.jpg",
        "funFacts": []
    },
    {
        "name": "John Hoeven",
        "state": "North Dakota",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hoeven_Official_Portrait_2014_%28cropped%29.JPG/250px-Hoeven_Official_Portrait_2014_%28cropped%29.JPG",
        "funFacts": []
    },
    {
        "name": "Kevin Cramer",
        "state": "North Dakota",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kevin_Cramer%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/250px-Kevin_Cramer%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Bernie Moreno",
        "state": "Ohio",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sen._Bernie_Moreno_official_photo%2C_119th_Congress_%28HR%29_%28cropped4%29.jpg/250px-Sen._Bernie_Moreno_official_photo%2C_119th_Congress_%28HR%29_%28cropped4%29.jpg",
        "funFacts": []
    },
    {
        "name": "Jon Husted",
        "state": "Ohio",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Sen._Jon_Husted_official_portrait%2C_119th_Congress_%28cropped%29.jpg/250px-Sen._Jon_Husted_official_portrait%2C_119th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "James Lankford",
        "state": "Oklahoma",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/James_Lankford_official_portrait%2C_118th_Congress_%28cropped%29.jpg/250px-James_Lankford_official_portrait%2C_118th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Markwayne Mullin",
        "state": "Oklahoma",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Markwayne_Mullin_official_Senate_photo_%28cropped%29.jpg/250px-Markwayne_Mullin_official_Senate_photo_%28cropped%29.jpg",
        "funFacts": [
            "Only person in the senate without at least a bachelor's degree"
        ]
    },
    {
        "name": "Ron Wyden",
        "state": "Oregon",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ron_Wyden_117th_Congress_%28cropped%29.jpeg/250px-Ron_Wyden_117th_Congress_%28cropped%29.jpeg",
        "funFacts": []
    },
    {
        "name": "Jeff Merkley",
        "state": "Oregon",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jeff_Merkley%2C_115th_official_photo_%28cropped%29.jpg/250px-Jeff_Merkley%2C_115th_official_photo_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "John Fetterman",
        "state": "Pennsylvania",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/John_Fetterman_official_portrait_%283x4%29.jpg/250px-John_Fetterman_official_portrait_%283x4%29.jpg",
        "funFacts": []
    },
    {
        "name": "Dave McCormick",
        "state": "Pennsylvania",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/McCormick_Portrait_%28HR%29_%28cropped%29.jpg/250px-McCormick_Portrait_%28HR%29_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Jack Reed",
        "state": "Rhode Island",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Senator_Jack_Reed_Official_Portrait_%28cropped%29.jpg/250px-Senator_Jack_Reed_Official_Portrait_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Sheldon Whitehouse",
        "state": "Rhode Island",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Sheldon_Whitehouse%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/250px-Sheldon_Whitehouse%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Lindsey Graham",
        "state": "South Carolina",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/U.S._Senator_Lindsey_Graham%2C_Official_Photo%2C_113th_Congress_%28cropped%29.jpg/250px-U.S._Senator_Lindsey_Graham%2C_Official_Photo%2C_113th_Congress_%28cropped%29.jpg",
        "funFacts": [
            "Close personal friend of John McCain"
        ]
    },
    {
        "name": "Tim Scott",
        "state": "South Carolina",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tim_Scott_official_portrait.jpg/250px-Tim_Scott_official_portrait.jpg",
        "funFacts": [
            "Appointed to the Senate by Nikki Haley after Jim DeMint resigned"
        ]
    },
    {
        "name": "John Thune",
        "state": "South Dakota",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/John_Thune_117th_Congress_portrait_%28cropped%29.jpg/250px-John_Thune_117th_Congress_portrait_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Mike Rounds",
        "state": "South Dakota",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mike_Rounds_official_Senate_portrait_%28cropped%29.jpg/250px-Mike_Rounds_official_Senate_portrait_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Marsha Blackburn",
        "state": "Tennessee",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Marsha_Blackburn%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg/250px-Marsha_Blackburn%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Bill Hagerty",
        "state": "Tennessee",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sen._Bill_Hagerty_official_Senate_portrait%2C_117th_Congress_%28cropped%29.jpg/250px-Sen._Bill_Hagerty_official_Senate_portrait%2C_117th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "John Cornyn",
        "state": "Texas",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/John_Cornyn_%28cropped%29.jpg/250px-John_Cornyn_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Ted Cruz",
        "state": "Texas",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ted_Cruz_official_116th_portrait_%28cropped%29.jpg/250px-Ted_Cruz_official_116th_portrait_%28cropped%29.jpg",
        "funFacts": [
            "Ran for President in 2016"
        ]
    },
    {
        "name": "Mike Lee",
        "state": "Utah",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Mike_Lee%2C_official_portrait_%284x5_crop%29.jpg/250px-Mike_Lee%2C_official_portrait_%284x5_crop%29.jpg",
        "funFacts": [
            "Elected in 2010 by unseating Bob Bennett at the controversional convention in the Tea Party wave"
        ]
    },
    {
        "name": "John Curtis",
        "state": "Utah",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Senator_John_Curtis_Official_Portrait_%28cropped%29.jpg/250px-Senator_John_Curtis_Official_Portrait_%28cropped%29.jpg",
        "funFacts": [
            "Former mayor of Provo, Utah",
            "Former representative from Utah's 3rd congressional district"
        ]
    },
    {
        "name": "Bernie Sanders",
        "state": "Vermont",
        "electionYear": 2030,
        "party": "Independent",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Bernie_Sanders_2023_%28cropped%29.jpg/250px-Bernie_Sanders_2023_%28cropped%29.jpg",
        "funFacts": [
            "Ran for President in 2016 and 2020",
        ]
    },
    {
        "name": "Peter Welch",
        "state": "Vermont",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Peter_Welch_official_Senate_photo_%28cropped%29.jpg/250px-Peter_Welch_official_Senate_photo_%28cropped%29.jpg",
        "funFacts": [
            "Has appeared as a cameo in four different Batman movies"
        ]
    },
    {
        "name": "Mark Warner",
        "state": "Virginia",
        "electionYear": 2026,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mark_Warner_2025_%28cropped%29.jpg/250px-Mark_Warner_2025_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Tim Kaine",
        "state": "Virginia",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Tim_Kaine%2C_official_portrait_%28119th_Congress%29_%28cropped_2%29.jpg/250px-Tim_Kaine%2C_official_portrait_%28119th_Congress%29_%28cropped_2%29.jpg",
        "funFacts": [
            "Hillary Clinton's running mate in 2016"
        ]
    },
    {
        "name": "Patty Murray",
        "state": "Washington",
        "electionYear": 2028,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Patty_Murray%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/250px-Patty_Murray%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Maria Cantwell",
        "state": "Washington",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Maria_Cantwell_%28cropped%29.jpg/250px-Maria_Cantwell_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Shelley Moore Capito",
        "state": "West Virginia",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Shelley_Moore_Capito_official_Senate_photo_%28cropped_2%29.jpg/250px-Shelley_Moore_Capito_official_Senate_photo_%28cropped_2%29.jpg",
        "funFacts": []
    },
    {
        "name": "Jim Justice",
        "state": "West Virginia",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Senator_Jim_Justice_Official_Portrait_with_flags.jpg/250px-Senator_Jim_Justice_Official_Portrait_with_flags.jpg",
        "funFacts": [
            "Elected as a Democrat during his gubernatorial campaign in 2016, but then switched to the Republican Party",
            "Has a bulldog named Babydog that he brings almost everywhere"
        ]
    },
    {
        "name": "Ron Johnson",
        "state": "Wisconsin",
        "electionYear": 2028,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ron_Johnson_portrait_117th_Congress_%28cropped%29.jpg/250px-Ron_Johnson_portrait_117th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Tammy Baldwin",
        "state": "Wisconsin",
        "electionYear": 2030,
        "party": "Democrat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Tammy_Baldwin%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/250px-Tammy_Baldwin%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "John Barrasso",
        "state": "Wyoming",
        "electionYear": 2030,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/John_Barrasso_official_portrait_112th_Congress_%28cropped%29.jpg/250px-John_Barrasso_official_portrait_112th_Congress_%28cropped%29.jpg",
        "funFacts": []
    },
    {
        "name": "Cynthia Lummis",
        "state": "Wyoming",
        "electionYear": 2026,
        "party": "Republican",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cynthia_Lummis_U.S._Senator_%28cropped%29.jpg/250px-Cynthia_Lummis_U.S._Senator_%28cropped%29.jpg",
        "funFacts": []
    }
];
