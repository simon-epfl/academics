import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";

const codes = {
  'CS': 'Computer Science',
  'MA': 'Mathematics',
  'COM': 'Communication Systems',
  'PHYS': 'Physics',
  'default': 'Other'
}

const colorMapping = {
  'CS': '#FBE2B1',
  'MA': '#D3EEE6',
  'COM': '#D3EEE6',
  'PHYS': '#D2D9EE',
  'default': '#F9F9ED'
}

const shinyColorMapping = {
  'CS': '#9B6A08',
  'MA': '#3FA286',
  'COM': '#3FA286',
  'PHYS': '#6B9AC4',
  'default': '#F9F9ED'
}

const semesters = [
  {
    title: 'Bachelor Semester 3',
    courses: [
      {
        title: "Software Construction",
        code: "CS-214",
        url: "https://cs-214.epfl.ch/",
        buttons: [{
          title: "Lecture notes I",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/softcon/midterm.pdf"
        },
        {
          title: "Lecture notes II",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/softcon/final.pdf"
        },
        {
          title: "Exercises (solutions)",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/softcon/exercises"
        }]
      },
      {
        title: "Probability and Statistics",
        code: "MA-232",
        url: "https://edu.epfl.ch/coursebook/fr/probability-and-statistics-for-ic-MATH-232",
        buttons: [{
          title: "Lecture notes",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/probastats/Probastats_Simon_Notes_Tricks.pdf"
        }]
      },
      {
        title: "Analysis III",
        code: "MA-203",
        url: "https://cs-214.epfl.ch/",
        buttons: [{
          title: "Lecture notes",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/analyseiii/Notes_Analyse_III_Simon.pdf"
        },
        {
          title: "Cheat Sheet (final)",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/analyseiii/Formulaire_Analyse_III_Simon.pdf"
        }]
      },
      {
        title: "Electromagnetism",
        code: "PHYS-114",
        url: "https://edu.epfl.ch/coursebook/fr/physique-generale-electromagnetisme-PHYS-114",
        buttons: [{
          title: "Cheat Sheet (final)",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/electromag/Formulaire_Final_Electromagnetisme_Simon.pdf"
        },
        {
          title: "Exercises (solutions)",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/electromag/Tricks_Series_Electromagnetisme_Simon.pdf"
        }]
      },
      {
        title: "Computer Architecture",
        code: "CS-200",
        url: "https://cs-214.epfl.ch/",
        buttons: [{
          title: "Lecture notes I",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/comparch/Notes_Comparch_Midterm_Simon.pdf"
        },
        {
          title: "Notes Pipelining",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/comparch/Notes_Comparch_Midterm_Simon.pdf"
        },
        {
          title: "Notes Multiprocessors",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/comparch/Notes_Comparch_Multiprocessors_Simon.pdf"
        },
        {
          title: "Exercises (solutions)",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/comparch/Notes_Comparch_Exercices_Simon.pdf"
        }]
      },
      {
        title: "State and human rights",
        code: "HUM-208",
        url: "https://edu.epfl.ch/coursebook/en/state-and-human-rights-HUM-208",
        buttons: [{
          title: "Lecture Notes",
          url: "https://github.com/simon-epfl/notes-ba3-simon/blob/main/shs/notes.pdf"
        }]
      }
    ]
  },
  {
    title: 'Bachelor Semester 2',
    courses: [
      {
        title: "Advanced ICC II",
        shiny: true,
        code: "COM-102",
        url: "https://edu.epfl.ch/coursebook/en/advanced-information-computation-communication-ii-COM-102",
        buttons: [{
          title: "Lecture notes",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/aicc/cours.pdf"
        }, {
          title: "Exercises (solutions)",
          url: "https://github.com/simon-epfl/notes-ba2-simon/tree/main/aicc/series"
        }]
      },
      {
        title: "Fundamentals of Digital Systems",
        code: "CS-173",
        url: "https://edu.epfl.ch/coursebook/fr/fundamentals-of-digital-systems-CS-173",
        shiny: true,
        buttons: [{
          title: "Notes de cours I",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/fds/fds-tricks-1.pdf"
        },
        {
          title: "Notes de cours II",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/fds/fds-tricks-2.pdf"
        },
        {
          title: "Verilog",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/fds/guide_verilog.pdf"
        },
        {
          title: "Single/Multi-cycle CPU",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/fds/multicycle.pdf"
        },
        {
          title: "Logisim Circuits",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/fds/logisim"
        },
        {
          title: "Verilog Programs",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/fds/verilog"
        },
        {
          title: "RISC-V Programs",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/fds/risc-v"
        },
        {
          title: "Exercises",
          url: "https://github.com/simon-epfl/notes-ba2-simon/tree/main/fds"
        },
        {
          title: "ETH exams",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/fds/eth-exams.pdf"
        }]
      },
      {
        title: "Analysis II",
        code: "MA-106",
        url: "https://edu.epfl.ch/coursebook/fr/analyse-ii-MATH-106-E",
        buttons: [{
          title: "Lecture notes",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/analyse/analyse-tricks.pdf"
        },
        {
          title: "Démonstrations",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/analyse/demos.pdf"
        },
        {
          title: "Séries rédigées",
          url: "https://github.com/simon-epfl/notes-ba2-simon/tree/main/analyse/series"
        }]
      },
      {
        title: "Object-Oriented Programming",
        code: "CS-108",
        url: "https://cs108.epfl.ch/",
        buttons: [{
          title: "Formulaire examen final",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/prog/formulaire.pdf"
        }]
      },
      {
        title: "SHS Communication B",
        code: "HUM-122",
        url: "https://graphsearch.epfl.ch/fr/course/HUM-122(b)",
        buttons: [{
          title: "Lecture Notes",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/shs/cours.pdf"
        }, {
          title: "Poster (final)",
          url: "https://github.com/simon-epfl/notes-ba2-simon/blob/main/shs/poster.pdf"
        }]
      }
    ]
  },
  {
    title: 'Bachelor Semester 1',
    courses: [
      {
        title: "General physics: mechanics",
        code: "PHYS-101",
        url: "https://edu.epfl.ch/coursebook/fr/physique-generale-mecanique-PHYS-101-F",
        buttons: [{
          title: "Formulaire",
          url: "https://github.com/simon-epfl/notes-ba1-simon/blob/master/mecanique/Me%CC%81canique%20Cheat%20Sheet.pdf"
        }]
      },
      {
        title: "Advanced ICC I",
        code: "CS-101",
        url: "https://edu.epfl.ch/coursebook/fr/advanced-information-computation-communication-i-CS-101",
        buttons: [{
          title: "Cheat Sheet (counting)",
          url: "https://github.com/simon-epfl/notes-ba1-simon/blob/master/aicc/AICC%20Counting%20Sheet.pdf"
        },
        {
          title: "Exercises (solutions)",
          url: "https://github.com/simon-epfl/notes-ba1-simon/tree/master/aicc"
        }]
      },
      {
        title: "Linear algebra",
        code: "MA-111",
        url: "https://edu.epfl.ch/coursebook/fr/algebre-lineaire-MATH-111-E",
        buttons: [{
          title: "Quizlet (final)",
          url: "https://github.com/simon-epfl/notes-ba1-simon/blob/master/algebre/Quizlet%20Alg%C3%A8bre.pdf"
        }]
      },
      {
        title: "Analysis I",
        code: "MA-101",
        url: "https://edu.epfl.ch/coursebook/fr/analyse-i-MATH-101-E",
        buttons: [{
          title: "Quizlet (final)",
          url: "https://github.com/simon-epfl/notes-ba1-simon/blob/master/analyse/Quizlet%20Analyse.pdf"
        }, {
          title: "Quizlet 2 (final)",
          url: "https://github.com/simon-epfl/notes-ba1-simon/blob/master/analyse/Quizlet%20Analyse%20VF.pdf"
        }]
      },
      {
        shiny: true,
        title: "Intro to programming",
        code: "CS-107",
        url: "https://edu.epfl.ch/coursebook/en/introduction-to-programming-CS-107",
        buttons: [{
          title: "Cheat Sheet (final)",
          url: "https://github.com/simon-epfl/notes-ba1-simon/blob/master/programmation/Formulaire%20Programmation.pdf"
        }]
      },
      {
        title: "ICC",
        code: "CS-119 (d)",
        url: "https://edu.epfl.ch/coursebook/en/information-computation-communication-CS-119-D",
        buttons: [],
        shiny: true
      }
    ]
  }
]

export default function Home() {
  return (
    <div className="grid md:grid-rows-[150px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] container mx-auto p-3">
      <div>
        <h1 className="text-2xl mb-4">getUniversities()<br />.filter(List(&quot;EPFL&quot;).contains(_)).flatMap(_.getCourses)<br />.filter(Simon.hasTaken(_))</h1>
        <h2>Welcome! Here are the list of the courses I&apos;ve taken so far at EPFL (Swiss Federal Institute of Technology in Lausanne).</h2>
        <h2 className="mb-2">Colors is used to indicate the section of the course, and S.A. means that I&apos;ve worked for this course as a student assistant.</h2>
        <div className="flex gap-1 mb-5">
          {Object.keys(codes).map(code => (
            // @ts-expect-error  colorMapping keyof
            <Badge key={code} variant="outline" style={{ backgroundColor: colorMapping[code] }}>{codes[code]}</Badge>
          ))}
        </div>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {semesters.map(semester => (
          <div key={semester.title} className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl">{semester.title}</h1>
            <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
              {semester.courses.map(course => (
                // @ts-expect-error colorMapping keyof
                <Card key={course.title} className={`w-full ${course.shiny ? 'shiny-border' : ''}`} style={{ '--shiny-color': shinyColorMapping[course.code.split('-')[0]] || colorMapping.default, backgroundColor: colorMapping[course.code.split('-')[0]] || colorMapping.default }}>
                  <CardHeader>
                    <CardTitle>{course.title} - <a target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline" href={course.url}>{course.code}</a></CardTitle>
                    {course.shiny && <Badge variant="outline" className="sa-badge">SA</Badge>}
                  </CardHeader>
                  <CardContent className="flex gap-1">
                    {course.buttons
                      .slice(0, 2)
                      .map(button => (
                        <a href={button.url} key={button.title} target="_blank">
                          <Button variant="outline">{button.title}</Button>
                        </a>
                      ))}{
                      course.buttons.length > 2 && (
                        <Popover>
                          <PopoverTrigger>
                            <Button variant="outline">+{course.buttons.length - 2}</Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="flex flex-col">
                              {course.buttons
                                .map(button => (
                                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={button.url} key={button.title} target="_blank">
                                    {button.title}
                                  </a>
                                ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      )
                    }
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/simon-epfl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Sources
        </a>
      </footer>
    </div>
  );
}
