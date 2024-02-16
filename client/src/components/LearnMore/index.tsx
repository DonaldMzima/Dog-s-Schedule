/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
  Button,
} from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../UI/Footer'

/**
 * LearnMorePage component displays information about the importance
 * of walking dogs, exercising, and related health and psychological
 * benefits.
 * @returns React component
 */
const LearnMorePage: React.FC = () => {
  return (
    <>
      {/* {!isMobile && <Nav />} */}

      <Link href="/">
        <Button rightIcon={<MdArrowBack />}>Go Back Home</Button>
      </Link>

      <br />
      <Center>
        <Box p={4}>
          <Head>
            <title>Learn More - DogWalkSchedules</title>
          </Head>
          <Heading as="h1" mt={4}>
            Daily Dog Schedules
          </Heading>
          <br />
          <img src="/walking-guide.png" alt="Dog Image" />{' '}
          {/* Add dog image here */}
          <Text mt={2}>
            it’s time to think about what your new life will look like together.
            One way to build and strengthen your bond with your pup is to
            establish a daily routine.
            <br /> Dogs thrive on having schedules and some predictability in
            their day. Having a schedule can also help new dog owners make sure
            that their fur baby’s
            <br /> needs are being met on a daily basis. However, every dog is
            unique so there isn’t a standard schedule for daily care that works
            for all dogs. You will also
            <br /> need to consider your own lifestyle and be honest about what
            you can consistently provide for your pup. It is important to
            understand basic dog walking
            <br /> safety tips, figuring out what works best for both you and
            your dog and building a regular schedule that you can maintain in
            the long run.
          </Text>
          <Heading as="h2" mt={4}>
            Dog Daily Routines Every Dog Owner Should Consider
          </Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    The First Step Towards The Schedule for Your Dog
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The first step towards building a schedule is to establish the
                individual needs of your dog. Your dog’s health, age, level of
                socialization and breed should
                <br /> all determine what sort of schedule you need. For
                example, a senior dog and puppy schedule will require more potty
                breaks as they need to relieve
                <br /> themselves more frequently than an adult dog.
                <br /> A puppy would also require more basic obedience and house
                training than an adult or senior dog. Regardless of the age of
                your dog, you should be
                <br /> mindful to schedule a potty break throughout the day and
                space them appropriately to prevent accidents and ensure the
                health and wellbeing of your
                <br /> dog. As for the length of walks, it might be best to have
                longer walks in the early mornings or late in the evenings if
                you have the time. Those times of
                <br /> day are usually cooler and ideal for the summer months.
                If your dog is leash reactive then these times might be tweaked
                so that you are walking your
                <br /> dog when there are fewer triggers on the street. For
                instance, some dogs are not comfortable around children so it
                might be best to not walk your dog
                <br /> when school is out and children are around who can
                accidentally have a run in with your dog.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    The Importance of Having a Dog Feeding Schedule
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A feeding schedule is another important factor to consider. Most
                dogs should eat twice a day, roughly 12 hours apart, while some
                younger and/or smaller <br />
                pups might need lunch to keep their metabolism in balance.
                Little snacks are OK too, so long as they don’t become excessive
                or are rewarding poor behavior.
                <br /> Mealtimes should be spaced out appropriately so that pups
                aren’t too hungry in between meals and so they don’t have to
                “hold it” too long in between potty
                <br /> breaks outside. Another factor to consider is that very
                young puppies will need to go to the bathroom shortly after
                eating, or else you’ll be gifted with a little
                <br /> “surprise” on your carpet. You will also need to consider
                timing the meals around walks and playtime. Feeding your dog
                right before bed or any intense exercise
                <br /> should be avoided. If dinner is too close to bedtime,
                your dog might need to go to the bathroom in the middle of the
                night. Meals before exercise or play can
                <br /> lead to bloat for certain breeds, especially deep chested
                large dogs. Bloat is a very serious medical condition that is
                oftentimes fatal for pups and often requires
                <br /> immediate surgical intervention. You should consult your
                veterinarian about a meal plan to make sure you keep your pup
                happy, healthy and satiated. One’s
                <br /> home can also be a factor in determining a daily routine.
                Those who live in an apartment without yard space might need to
                make more trips outside or plan
                <br /> for some rigorous playtime inside in order to exercise
                your dog for proper weight management and overall health.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    In Your Dog Daily Schedule You Should Have Dedicated Quality
                    Time
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Quality time is another important aspect of the schedule.
                Carving out time to spend with your pup every day helps
                establish your bond. If your pup is
                <br /> alone most of the day and doesn’t have another furry
                friend at home to keep them company then you should try to
                create an enriching environment. Invest
                <br /> in some dog toys that can keep your dog entertained, like
                treat puzzles. Scheduling some mentally stimulating playtime is
                essential for your dog’s happiness.
                <br /> Hiring pet sitters to visit your dog while you are gone
                can help to keep fido from getting too bored or lonely while you
                are away for the day. Regular walkies
                <br /> provided by a certified dog walker can help set the pace
                for your pup. Enrolling in training classes to learn how to
                train your dog to be a good pupizen is a <br />
                great start to early pet ownership. From there, you can schedule
                a daily training session at home to help practice tricks, like
                sit and stay, walking on a leash
                <br /> as well as reinforce basic good obedience skills in your
                pup. Just remember: idle paws and idle minds can lead to chewed
                up furniture! A good sleep schedule is
                <br /> also imperative for your pup. Your days shouldn’t be so
                jam packed. All dogs need to have some nap time. Purchasing a
                quality dog bed will ensure that your pup
                <br /> has a comfortable place to call their own and relax.
              </AccordionPanel>
            </AccordionItem>
            <br />
            <br />
            <Heading>
              Below we will give a general outline for a single day schedule for
              your dog:
            </Heading>
            <br />
            <Heading>MORNING</Heading>
            <Text mt={2}>
              6-7am: potty break and walk
              <br /> 7:30am: breakfast <br />
              8:30am: another potty break for puppies Allow time for digestion
              before playing with your dog or exercise
              <br /> If you are crate training your dog, now would be a good
              time to crate your dog before leaving for work.
            </Text>
            <Heading>AFTERNOON</Heading>
            <Text mt={2}>
              11am-1pm: potty break and walk. If you are unable to be home, hire
              a dog walker to take care of your dog.
              <br /> This is an excellent time for your dog to get some exercise
              and socialization. Playtime, like fetch, can help get
              <br /> out some excess energy. This game is also an excellent
              opportunity to reinforce some training skills by helping
              <br /> your dog to learn basic commands like “drop it”, “stay” and
              make sure they do not develop any resource guarding.
            </Text>
            <Heading>EVENING</Heading>
            <Text mt={2}>
              5:30-7pm: Time for a longer walk. Evenings can often be the best
              tie for this, especially during hate summer months
              <br /> when midday is too hot to be outside for very long.
              <br />
              <br /> 7:30-8:30 Dinner time! Make sure your pup has had some time
              to decompress after walk.
              <br /> The evenings can now be spent winding down together and
              relaxing. Use tis time for pets, cuddles, grooming, etc.
              <br />
              <br /> 9:30-:10:30 One last quick potty break before bedtime!
            </Text>
            <br />
            <br />
            {/* stop=-=here */}
            <Heading>Dog Walking Safety Tips</Heading>
            <br />
            <img src="/safety-tips.webp" alt="Dog Image" />{' '}
            {/* Add dog image here */}
            <Text mt={2}>
              As a dog owner living in New York City you might be asking
              yourself: is dog walking dangerous? Is it safer to walk with a
              dog? Should I purchase
              <br /> any dog attack protection devices? How do you navigate dog
              walking in the city? Is hiring a dog walker safe? We are here to
              answer those questions!
              <br /> Here are 10 dog walking safety tips to help you walk your
              dog in the big city!
            </Text>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    PHYSICAL WELLBEING OF YOUR DOG
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The number one priority for dog owners is the wellbeing of your
                beloved pup. To keep your dog safe at all times, you need to
                take the dog health
                <br /> and dogs body into consideration when planning your
                outings. For example, overweight dogs, senior dogs, those with
                medical conditions like a heart
                <br /> defect or breeds with issues breathing might not do well
                walking outside for extended periods of time. The weather
                conditions could also be a factor. <br />
                Consult with your vet about these concerns so you can be aware
                of warning signs that your dog is unwell and under what
                conditions you should be <br />
                extra cautious.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    TRAINING
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Working with a licensed and experienced dog trainer can help you
                and Fido get started on the right foot. It is beneficial for
                eveyone if you taught
                <br /> your dog to walk on a leash and how to engage in social
                interactions with people and other dogs while out on walks.
                Working with a trainer can also
                <br /> educate the pet owner on dog behavior, increase the
                understanding of your dog’s body language and offer safety tips
                for walking dog in city.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    WEATHER
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Check the local forecast for the weather conditions before
                heading out to walk your dog. In the case of hot weather, you
                should plan to stick to the shade
                <br /> and keep a slower pace. If it is dangerously hot outside
                you should plan to shorten walks and spend extra time playing
                inside where it is cooler. Be very
                <br /> careful on black pavement as the ground can get so hot it
                can burn the paws of the dogs. Bring water and a water bowl to
                keep both yourself and your <br />
                furry friend hydrated. When it starts to get colder and you are
                planning on walking your dog in the winter, make sure your dog
                is properly bundled in a coat
                <br /> or sweater if needed. Dogs with thick fur might be OK
                without a coat in cold weather and can actually overheat in a
                heavy coat. Watch out for salt on sidewalks
                <br /> and roads as walking on it can be very painful for your
                dog. Do not let your dog lick their paws and make sure to also
                wash their paws after walks as the salt can
                <br /> make dogs sick. Check the AQI as certain dogs with
                medical conditions may not be able to stay outside for very long
                if the levels are too high. If there is a<br /> thunderstorm in
                the forecast and your dog is afraid of thunder then plan your
                walks around the storm. Many dogs panic and get lost in these
                situations and it
                <br /> can be a very traumatizing experience in general to be
                outside when the boomers strike.{' '}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ENVIRONMENT
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Be aware of your surroundings at all times and think about the
                area you are exploring with your pooch. If you are in a wooded
                area or a park with tall,
                <br /> unmowed grass then you might need to check your dog for
                fleas and ticks. Be respectful of the local wildlife and do not
                let your dog off leash around
                <br /> wild animals.{' '}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    NAVIGATING NEW PLACES
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {' '}
                If you and your pet travel to a new place it is best to do some
                research ahead of time. Getting lost in a new place can be
                scary! Make sure to <br />
                research ahead of time where you are going to walk your dog and
                look at maps of the area. Bring a paper map if you can, in case
                your phone <br />
                loses service or battery, but having navigation tools on your
                phone are helpful as well. Look for signs in the area alerting
                people to potential
                <br /> dangers, like signs for rat poison or areas that were
                recenlty sprayed with pesticides. Trespassing is never a good
                idea so stick to the roads <br />
                designated for pedestrians and make sure you are walking in a
                dog friendly area.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    OTHER DOGS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Be mindful of the other dog walkers in the area, whether they be
                a fellow neighbor or a professional. You should avoid other dogs
                if they seem
                <br /> unfriendly, unwell or if they are busy eliminating or
                learning some training with their person. An Important thing to
                keep in mind when it comes to
                <br /> dog walking etiquette is understanding how to socialize
                your dog responsibly and to ask permission before interacting
                with other dogs. During the
                <br /> meet and greets between your pup and another, watch body
                language for any signs of aggression and make sure to intervene
                and before anything
                <br /> escalates. A good way to reinforce dog training while
                walking is to carry treats to reinforce positive behavior.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    TRAFFIC CONCERNS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Dog walking in the city comes with some unique challenges,
                specifically with relation to traffic. Paying attention to the
                roads, traffic signs and
                <br /> vehicles is important especially when crossing the
                street. Always cross at designated crosswalks and wait until it
                is safe to cross. Always look both
                <br /> ways and be VERY careful of any vehicles turning as they
                might not see you in the crosswalk. Be mindful of the bike lanes
                and watch out for <br />
                scooters and bikes. Wearing reflective gear, like a safety vest
                or blinking lights, at night can help to make you more visible
                to people on the road. <br />
                Carrying a flashlight is a good idea as well.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    WALKING MULTIPLE DOGS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                One of the risks of dog walking business and persons who own
                more than one pup is navigating how to walk multiple dogs
                safely. As a <br />
                professional dog walker, one has to consider pairing up dogs who
                are compatible and not just be geography. Age, personality,
                health and <br />
                temperament are all factors to consider. Other considerations
                when walking multiple dogs is making sure you have a proper hold
                on each pooch <br />
                so you can keep stop your dogs from any potential hazardous
                situations. Both hands should be used to walk the dogs, with one
                in each hand for <br />
                two dogs and possibly two in one and one in another for three. A
                shorter leash is important, so keep the dogs no more than 3 feet
                away from you <br />
                at all times. Be careful with dog interactions as the pack
                mentality can sometimes kick in. If a passing dog is barking, be
                prepared to have your <br />
                whole pack barking too.{' '}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    EQUIPMENT AND SUPPLIES
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                It is important to choose the right equipment, and that also
                includes having an understanding of basic dog commands as well.
                Never leave your home
                <br /> without a dog collar with name tags and a phone number. A
                dog harness that is sized properly and fits your dog’s body type
                is a good idea as well
                <br /> to keep your dog secure. Every dog is built differently
                so choose a harness that suits their specific needs. Make sure
                to always follow your local leash laws.
                <br /> When choosing your dogs leash, make sure it is made of a
                sturdy material like thick nylon and that it is appropriate
                length. A leash that is too long means
                <br /> your dog can get too far away from you to properly
                handle. Too short and your dog can become anxious since they
                can’t sniff and explore. We do not
                <br /> recommend using retractable leashes as it can be harder
                to control your dog if a situation arises, like a chicken bone
                on the street or a not so friendly dog.
                <br /> Some dogs eat some pretty gross stuff, like dead animals
                or feces. If your pup is prone to scavenging and searching for
                their next tasty snack, think
                <br /> about investing in a special muzzle designed to make sure
                they don’t eat anything they aren’t supposed to. You don’t want
                to take your dog to the ER or <br />
                ave a case of diarrhea on the new rug.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Center>
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default LearnMorePage
