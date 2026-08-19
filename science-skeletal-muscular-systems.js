/* =====================================================================
   SCIENCE — Chapter 3: The Skeletal and Muscular Systems
   Source: uploaded Class 5 Science textbook, Chapter 3 (pages 270-281)
   Every fact below is drawn directly from those pages. Nothing has been
   invented or padded — see the chat note at the end of this project's
   README-style summary for the exact count check.
===================================================================== */

SUBJECTS.find(s => s.id === 'science').chapters.push({
  id: 'skeletal-muscular-systems',
  chapterNumber: 3,
  title: 'The Skeletal and Muscular Systems',

  /* ---------------------------------------------------------------
     NOTES
  --------------------------------------------------------------- */
  notes: [
    {
      heading: "What is the Skeletal System?",
      content: "<p>The framework of bones in our body is known as the <strong>skeleton</strong>. It is covered with flesh (muscles and fats) and skin. The skeletal system and the muscular system work very closely together to make our body move.</p>"
    },
    {
      heading: "Functions of the Skeleton",
      content: "<ul><li>The skeleton gives the body its <strong>shape</strong>.</li><li>The skeleton provides <strong>support</strong> to the body and keeps the internal organs in their proper place.</li><li>The muscles attached to bones help in the <strong>movement</strong> of the various body parts.</li><li>The skeleton <strong>protects</strong> the internal organs from damage by surrounding them with bones — the skull protects the brain, the ribcage protects the heart and lungs, and the vertebral column protects the spinal cord.</li></ul>"
    },
    {
      heading: "Bone Marrow and Minerals",
      content: "<p>Larger bones contain <strong>bone marrow</strong>, a spongy tissue inside the bones which produces red blood cells (RBCs) and most of the white blood cells (WBCs). Bones also contain minerals such as calcium and potassium.</p>"
    },
    {
      heading: "How Many Bones Do We Have?",
      content: "<p>A newborn baby has <strong>300 to 305 bones</strong>. As the baby grows older, some bones join together, so the skeleton of an adult has only <strong>206 bones</strong>. Our hands have the maximum number of bones — 54 in total (27 in each hand) — and our feet have 52 in total (26 in each foot). Bones in the palm, foot and toe are small in size; bones in the legs and arms are long; the ribs are round; and a few bones in the head are flat.</p>"
    },
    {
      heading: "The Backbone (Vertebral Column)",
      content: "<p>The skull is attached to the <strong>backbone</strong>. The backbone is a long, bony structure that provides support to the body — it is also known as the <strong>vertebral column</strong> or <strong>spine</strong>. The human spinal column is made up of <strong>33 bones called vertebrae</strong>. These vertebrae are stacked on each other with the support of intervertebral discs. The backbone has movable joints, which lets us bend and twist easily, and the vertebral column protects the delicate spinal cord.</p>"
    },
    {
      heading: "Upper Limbs and Shoulder Girdle",
      content: "<p>There are two collarbones and two shoulder bones forming the <strong>shoulder girdle</strong>, which joins the upper limbs to the spine. Each arm consists of one upper-arm bone and two lower-arm bones. There are 8 bones in the wrist. The palm of each hand is made up of 5 bones, and 14 bones make up the fingers of a hand. The upper arm bone is called the <strong>humerus</strong>, and it is joined to the two bones of the lower arm at the elbow.</p>"
    },
    {
      heading: "Lower Limbs and Hip Girdle",
      content: "<p>The <strong>hip girdle</strong> is made of three bones which are fused to form a single bone — there are 2 hip bones (girdles) in total. The two hip bones connect the spine to the lower limbs, and the urinary bladder lies inside the hip girdle. Each leg has one thigh bone, one kneecap, and two other bones, one of which is called the <strong>shin bone</strong>. The shin bone is the larger and stronger of the two lower-leg bones. The kneecap is a thick, round bone that you can feel on your knee — it protects our knee joint from getting hurt or damaged. There are 7 bones in each ankle and 19 bones in each foot.</p>"
    },
    {
      heading: "The Skull",
      content: "<p>The <strong>skull</strong> is the bony structure of the head that surrounds the brain and gives the head its shape. The skull is made up of 22 bones. The round part of the skull that holds the brain is called the <strong>cranium</strong>, made up of 8 bones. The face, including the lower jaw, consists of 14 bones. There are also three tiny bones in each ear and one single bone in the throat. The bones of the skull protect the brain and organs such as the eyes, ears and nose. All the bones of the skull are fixed and immovable, except the lower jaw. The jaw bones bear teeth, but teeth are not bones!</p>"
    },
    {
      heading: "The Ribcage",
      content: "<p>The <strong>ribcage</strong> (or chest) consists of 25 bones — one breastbone (<strong>sternum</strong>) and 12 sets of ribs (24 ribs). 10 pairs of ribs are attached to the sternum in the front and to the backbone at the back. The last two pairs are called <strong>floating ribs</strong>, because they are not attached to the sternum. These 24 rib bones form a cage which helps protect internal organs like the heart and the lungs.</p>"
    },
    {
      heading: "Record-Breaking Bones",
      content: "<p>An adult's body is made up of <strong>206 bones</strong> in total. The long bones are hollow and are filled with bone marrow. The <strong>thigh bone (femur)</strong> is the longest and strongest bone in our body. The smallest bone is the <strong>stapes</strong>, found in our ear. The <strong>mandible</strong> (which forms the lower jaw) is the hardest bone. Our big toes have two bones each, while the other four toes in each foot have three bones each. Interestingly, humans and giraffes both have seven bones in their neck — a giraffe's neck bones are simply much longer than ours!</p>"
    },
    {
      heading: "Joints — Where Bones Meet",
      content: "<p>A <strong>joint</strong> is a place where two or more bones fit together. Bones are held together by strong, fibre-like bands called <strong>ligaments</strong>. At the joints, where bones rub against each other, they are supported by a stiff but flexible substance called <strong>cartilage</strong>, which protects the joints and helps movement. There are many different types of joints — some are movable, while others are immovable. The joints of the cranium in the skull, the ribs in the breastbone, and the bones of the girdles are examples of <strong>immovable joints</strong>. Movable joints contain a lubricating liquid to reduce friction between the bones, and the muscles attached to them contract and relax together to allow movement.</p>"
    },
    {
      heading: "Types of Movable Joints",
      content: "<ul><li><strong>Pivot joint:</strong> found between the head and the first two vertebrae of the spine. It helps the head move upward, downward and sideways.</li><li><strong>Sliding (gliding) joint:</strong> allows small sliding movements at the wrist, ankle and between the vertebrae of the backbone, letting the back bend, twist and turn. It is also called a plane or planar joint, and it lets bones glide past one another up and down, left and right, and diagonally.</li><li><strong>Ball and socket joint:</strong> allows circular movement. One bone ends in a ball that fits into the socket of another bone. Found in the shoulders and hips.</li><li><strong>Hinge joint:</strong> works like the hinge of a door, allowing movement in only one direction, usually back and forth, up to about 180°. Found in the knee, elbow, fingers and toes.</li></ul>"
    },
    {
      heading: "Muscles and Movement",
      content: "<p>Bones are covered with tissues called <strong>muscles</strong>. Over 600 muscles are present in the entire human body. Muscles are attached to the bones with the help of <strong>tendons</strong>. Muscles contract and relax, and thus produce movement in the body. There are mainly two types of muscles in our body — voluntary and involuntary.</p>"
    },
    {
      heading: "Types of Muscles",
      content: "<ul><li><strong>Voluntary muscles</strong> (striated or striped muscles): their movement can be controlled. For example, the skeletal muscles present in the arms, hands, legs and feet.</li><li><strong>Involuntary muscles</strong> (non-striated or unstriped muscles): work on their own — we have no control over their movement. There are two types: <strong>cardiac muscles</strong>, found only in the heart, which work all the time (whether we are asleep or awake) and do not get tired, pumping blood to different parts of the body; and <strong>smooth muscles</strong>, found in the stomach and intestine, which contract and relax to help move food during digestion. Not all muscles are attached to bones — for example, the muscles of the heart and stomach are not attached to bones.</li></ul>"
    }
  ],

  /* ---------------------------------------------------------------
     50 MCQs — four options, correctIndex (0-3), explanation
  --------------------------------------------------------------- */
  mcqs: [
    { question: "What is the framework of bones in our body called?", options: ["The muscular system", "The skeleton", "The nervous system", "The cartilage"], correctIndex: 1, explanation: "The framework of bones in our body is known as the skeleton. It is covered with flesh (muscles and fats) and skin." },
    { question: "Which of these is NOT a function of the skeleton?", options: ["Giving the body its shape", "Digesting food", "Supporting the body", "Protecting internal organs"], correctIndex: 1, explanation: "The skeleton gives shape, provides support, helps in movement (with muscles), and protects organs — digestion is not a function of the skeleton." },
    { question: "Which bone protects the brain?", options: ["The ribcage", "The femur", "The skull", "The hip girdle"], correctIndex: 2, explanation: "The skull protects the brain by surrounding it with bone." },
    { question: "Which body part protects the heart and lungs?", options: ["The ribcage", "The skull", "The wrist", "The kneecap"], correctIndex: 0, explanation: "The ribcage protects the internal organs, especially the heart and the lungs, by surrounding them with bones." },
    { question: "What does the vertebral column protect?", options: ["The stomach", "The spinal cord", "The kidneys", "The lungs"], correctIndex: 1, explanation: "The vertebral column (backbone) protects the delicate spinal cord that runs through it." },
    { question: "What helps the various body parts move?", options: ["Skin", "Fat", "Muscles attached to bones", "Blood"], correctIndex: 2, explanation: "The muscles attached to bones help in the movement of the various body parts." },
    { question: "What is bone marrow?", options: ["A hard mineral found only in teeth", "A spongy tissue inside larger bones that produces blood cells", "The outer covering of the skull", "A type of joint"], correctIndex: 1, explanation: "Bone marrow is a spongy tissue inside larger bones which produces red blood cells (RBCs) and most white blood cells (WBCs)." },
    { question: "Besides producing blood cells, what else do bones contain?", options: ["Minerals such as calcium and potassium", "Digestive juices", "Muscle tissue only", "Air pockets only"], correctIndex: 0, explanation: "Bones also contain minerals such as calcium and potassium." },
    { question: "About how many bones does a newborn baby have?", options: ["100 to 120", "150 to 180", "300 to 305", "500 to 520"], correctIndex: 2, explanation: "A newborn baby has 300 to 305 bones; some of these join together as the baby grows." },
    { question: "How many bones does an adult human skeleton have?", options: ["150", "206", "260", "300"], correctIndex: 1, explanation: "As a baby grows, some bones join together, so the adult skeleton ends up with 206 bones." },
    { question: "Which parts of the body have the maximum number of bones?", options: ["The skull and ribcage", "The hands and feet", "The hip and shoulder girdles", "The arms and legs"], correctIndex: 1, explanation: "Our hands have 54 bones in total (27 each) and our feet have 52 bones in total (26 each) — the maximum number of bones in the body." },
    { question: "Which of these bones is described as flat?", options: ["A few bones in the head", "The thigh bone", "The upper arm bone", "The bones in the palm"], correctIndex: 0, explanation: "The bones in the palm, foot and toe are small; bones in the legs and arms are long; the ribs are round; and a few bones in the head are flat." },
    { question: "What is another name for the backbone?", options: ["The cranium", "The vertebral column", "The sternum", "The mandible"], correctIndex: 1, explanation: "The backbone is also known as the vertebral column or spine." },
    { question: "How many vertebrae make up the human spinal column?", options: ["22", "24", "33", "42"], correctIndex: 2, explanation: "The human spinal column is made up of 33 bones called vertebrae." },
    { question: "What allows the backbone to bend and twist easily?", options: ["Its movable joints", "Its immovable joints", "Its bone marrow", "Its cartilage cap"], correctIndex: 0, explanation: "The backbone has movable joints, and this enables us to bend and twist easily." },
    { question: "Which bones form the shoulder girdle?", options: ["Two collarbones and two shoulder bones", "One breastbone and 12 ribs", "Three fused hip bones", "22 skull bones"], correctIndex: 0, explanation: "There are two collarbones and two shoulder bones forming the shoulder girdle, which joins the upper limbs to the spine." },
    { question: "How many bones does each arm have, other than the wrist, palm and fingers?", options: ["One bone only", "One upper-arm bone and two lower-arm bones", "Two upper-arm bones", "Four bones of equal size"], correctIndex: 1, explanation: "Each arm consists of one upper-arm bone and two lower-arm bones." },
    { question: "What is the upper arm bone called?", options: ["Femur", "Sternum", "Humerus", "Mandible"], correctIndex: 2, explanation: "The upper arm is called the humerus, and it is joined to the two bones of the lower arm at the elbow." },
    { question: "How many bones are there in each wrist?", options: ["5", "8", "14", "19"], correctIndex: 1, explanation: "There are 8 bones in the wrist." },
    { question: "How many bones make up the fingers of one hand?", options: ["5", "8", "14", "22"], correctIndex: 2, explanation: "14 bones make up the fingers of a hand, while the palm itself is made up of 5 bones." },
    { question: "The hip girdle is made of how many bones fused into one?", options: ["Two", "Three", "Four", "Five"], correctIndex: 1, explanation: "The hip girdle is made of three bones which are fused to form a single bone." },
    { question: "Which organ lies inside the hip girdle?", options: ["The heart", "The urinary bladder", "The lungs", "The brain"], correctIndex: 1, explanation: "The urinary bladder lies inside the hip girdles." },
    { question: "Each leg has one thigh bone, one kneecap, and how many other bones?", options: ["One", "Two", "Three", "Four"], correctIndex: 1, explanation: "Each leg has one thigh bone, one kneecap and two other bones, one of which is the shin bone." },
    { question: "Which bone is described as the larger and stronger of the two lower-leg bones?", options: ["The kneecap", "The shin bone", "The femur", "The humerus"], correctIndex: 1, explanation: "The shin bone is the larger and stronger of the two bones in the lower leg." },
    { question: "What does the kneecap protect?", options: ["The hip girdle", "The knee joint", "The spinal cord", "The ankle bones"], correctIndex: 1, explanation: "The kneecap is a thick, round bone that protects our knee joint from getting hurt or damaged." },
    { question: "How many bones are there in each ankle?", options: ["5", "7", "14", "19"], correctIndex: 1, explanation: "There are 7 bones in each ankle." },
    { question: "How many bones are there in each foot?", options: ["7", "14", "19", "26"], correctIndex: 2, explanation: "There are 19 bones in each foot." },
    { question: "How many bones make up the skull in total?", options: ["8", "14", "22", "33"], correctIndex: 2, explanation: "The skull is made up of 22 bones in total." },
    { question: "The round part of the skull that holds the brain is called the:", options: ["Sternum", "Cranium", "Mandible", "Girdle"], correctIndex: 1, explanation: "The round part of the skull that holds the brain is called the cranium, and it is made up of 8 bones." },
    { question: "How many bones make up the face, including the lower jaw?", options: ["8", "14", "22", "24"], correctIndex: 1, explanation: "The face, including the lower jaw, consists of 14 bones." },
    { question: "How many tiny bones are there in each ear?", options: ["One", "Two", "Three", "Four"], correctIndex: 2, explanation: "There are three tiny bones in each ear." },
    { question: "Which bones of the skull are movable?", options: ["All of them", "None of them", "Only the lower jaw", "Only the cranium"], correctIndex: 2, explanation: "All the bones of the skull are fixed and immovable, except the lower jaw." },
    { question: "Which statement about teeth is correct?", options: ["Teeth are the smallest bones in the body", "Teeth are not bones", "Teeth are part of the cranium", "Teeth are made of cartilage only"], correctIndex: 1, explanation: "The jaw bones bear teeth, but teeth themselves are not bones." },
    { question: "How many bones make up the ribcage in total?", options: ["19", "22", "25", "33"], correctIndex: 2, explanation: "The ribcage consists of 25 bones — one breastbone (sternum) and 24 ribs (12 pairs)." },
    { question: "How many pairs of ribs are attached to the sternum at the front and the backbone at the back?", options: ["8 pairs", "10 pairs", "12 pairs", "14 pairs"], correctIndex: 1, explanation: "10 pairs of ribs are attached to the sternum in the front and to the backbone at the back." },
    { question: "What are the last two pairs of ribs, which are not attached to the sternum, called?", options: ["Floating ribs", "Sliding ribs", "Loose ribs", "Free ribs"], correctIndex: 0, explanation: "The last two pairs are called floating ribs, as they are not attached to the sternum." },
    { question: "Which is the longest and strongest bone in the human body?", options: ["The humerus", "The sternum", "The femur (thigh bone)", "The mandible"], correctIndex: 2, explanation: "The thigh bone (femur) is the longest and strongest bone in our body." },
    { question: "Which is the smallest bone in the human body, and where is it found?", options: ["The stapes, in the ear", "The stapes, in the wrist", "The mandible, in the jaw", "The kneecap, in the leg"], correctIndex: 0, explanation: "The smallest bone is the stapes, which is present in our ear." },
    { question: "Which is the hardest bone in the human body?", options: ["The femur", "The sternum", "The cranium", "The mandible"], correctIndex: 3, explanation: "The mandible, which forms the lower jaw, is the hardest bone in the human body." },
    { question: "How many bones does a giraffe have in its neck, compared to a human?", options: ["The same number — seven — but much longer", "Twice as many", "Half as many", "The giraffe has none"], correctIndex: 0, explanation: "Humans and giraffes both have seven bones in their neck; a giraffe's neck bones are simply much longer." },
    { question: "What is a joint?", options: ["A place where two or more bones fit together", "A type of muscle", "A mineral found in bones", "The outer layer of skin"], correctIndex: 0, explanation: "A joint is a place where two or more bones fit together." },
    { question: "What are ligaments?", options: ["Strong, fibre-like bands that hold bones together", "Muscles found only in the heart", "The soft part inside bones", "A type of blood cell"], correctIndex: 0, explanation: "Bones are held together by strong bands of fibre-like structures called ligaments." },
    { question: "What is cartilage?", options: ["A stiff but flexible substance that protects joints and helps movement", "A hard mineral in teeth", "A type of muscle tissue", "The lubricating liquid inside a joint"], correctIndex: 0, explanation: "At the joints, where bones rub against each other, they are supported by a stiff but flexible substance called cartilage, which protects the joints and helps movement." },
    { question: "Which of these is an example of an immovable joint?", options: ["The joints of the cranium in the skull", "The knee joint", "The shoulder joint", "The wrist joint"], correctIndex: 0, explanation: "The joints of the cranium in the skull, the ribs in the breastbone, and the bones of the girdles are examples of immovable joints." },
    { question: "What helps reduce friction between bones at a movable joint?", options: ["Bone marrow", "A lubricating liquid", "Muscle tissue only", "Minerals like calcium"], correctIndex: 1, explanation: "Movable joints contain a lubricating liquid to reduce the friction between the bones." },
    { question: "Which joint is found between the head and the first two vertebrae of the spine, allowing the head to move up, down and sideways?", options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Sliding joint"], correctIndex: 2, explanation: "A pivot joint is found between the head and the first two vertebrae of the spine, helping the head move upward, downward and sideways." },
    { question: "Which type of joint allows the back to bend, twist and turn, and is also called a gliding joint?", options: ["Pivot joint", "Sliding joint", "Hinge joint", "Ball and socket joint"], correctIndex: 1, explanation: "The sliding joints allow small sliding movements at the wrist, ankle and between the vertebrae of the backbone, and are also called gliding joints." },
    { question: "Which type of joint is found in the shoulders and hips and allows circular movement?", options: ["Hinge joint", "Pivot joint", "Ball and socket joint", "Sliding joint"], correctIndex: 2, explanation: "A ball and socket joint allows circular movement and is found in the shoulders and hips." },
    { question: "Which type of joint works like the hinge of a door, allowing movement in only one direction, and is found in the knee and elbow?", options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Gliding joint"], correctIndex: 0, explanation: "The hinge joints work like the hinges of a door, allowing movement of bones in only one direction — found in the knee, elbow, fingers and toes." },
    { question: "What are tendons?", options: ["Special tissues that attach muscles to bones", "The bands that hold two bones together at a joint", "A type of involuntary muscle", "A mineral found in bone marrow"], correctIndex: 0, explanation: "Muscles are attached to the bones with the help of tendons." }
  ],

  /* ---------------------------------------------------------------
     30 FLASHCARDS — each a distinct fact/term, no repeats
  --------------------------------------------------------------- */
  flashcards: [
    { front: "Skeleton", back: "The framework of bones in our body, covered with muscles, fat and skin." },
    { front: "Skull", back: "The bony structure of the head that surrounds and protects the brain; made up of 22 bones." },
    { front: "Cranium", back: "The round part of the skull that holds the brain; made up of 8 bones." },
    { front: "Backbone / Vertebral column", back: "The long, bony structure made of 33 vertebrae that supports the body and protects the spinal cord." },
    { front: "Shoulder girdle", back: "Two collarbones and two shoulder bones that join the upper limbs to the spine." },
    { front: "Humerus", back: "The bone of the upper arm, joined to the two lower-arm bones at the elbow." },
    { front: "Hip girdle", back: "Three fused bones forming a single hip bone; there are 2 hip girdles, connecting the spine to the legs." },
    { front: "Femur", back: "The thigh bone — the longest and strongest bone in the human body." },
    { front: "Shin bone", back: "The larger and stronger of the two bones in the lower leg." },
    { front: "Kneecap", back: "A thick, round bone on the front of the knee that protects the knee joint." },
    { front: "Sternum", back: "The breastbone, to which 10 pairs of ribs are attached at the front." },
    { front: "Floating ribs", back: "The last two pairs of ribs, which are not attached to the sternum." },
    { front: "Bone marrow", back: "The spongy tissue inside larger bones that produces red blood cells and most white blood cells." },
    { front: "Newborn bone count", back: "A newborn baby has 300 to 305 bones." },
    { front: "Adult bone count", back: "An adult human skeleton has 206 bones." },
    { front: "Longest & strongest bone", back: "The femur (thigh bone)." },
    { front: "Smallest bone", back: "The stapes, found in the ear." },
    { front: "Hardest bone", back: "The mandible, which forms the lower jaw." },
    { front: "Joint", back: "A place where two or more bones fit together." },
    { front: "Ligaments", back: "Strong, fibre-like bands that hold bones together at a joint." },
    { front: "Cartilage", back: "A stiff but flexible substance that protects joints and helps movement." },
    { front: "Pivot joint", back: "Found between the head and the first two vertebrae; lets the head move up, down and sideways." },
    { front: "Hinge joint", back: "Works like a door hinge; moves in one direction only. Found in the knee, elbow, fingers and toes." },
    { front: "Ball and socket joint", back: "Allows circular movement; found in the shoulders and hips." },
    { front: "Sliding (gliding) joint", back: "Allows small sliding movements at the wrist, ankle and backbone, letting it bend, twist and turn." },
    { front: "Tendons", back: "Special tissues that attach muscles to bones." },
    { front: "Voluntary muscles", back: "Muscles whose movement can be controlled, e.g. in the arms, hands, legs and feet." },
    { front: "Involuntary muscles", back: "Muscles that work on their own and cannot be controlled, e.g. cardiac and smooth muscles." },
    { front: "Cardiac muscles", back: "Found only in the heart; work non-stop, asleep or awake, and pump blood." },
    { front: "Smooth muscles", back: "Found in the stomach and intestine; help move food during digestion." }
  ],

  /* ---------------------------------------------------------------
     15 IMAGE-BASED QUESTIONS — original SVG illustrations, shown large
  --------------------------------------------------------------- */
  imageQuestions: [
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-01-skull.jpg", imageAlt: "Anatomical illustration of a skeleton with the skull highlighted in orange", question: "Look at the highlighted part of the skeleton. Which part is it?", options: ["Skull", "Ribcage", "Hip girdle", "Backbone"], correctIndex: 0, explanation: "The highlighted part is the skull — the bony structure that surrounds and protects the brain." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-02-sternum.jpg", imageAlt: "Anatomical illustration of a ribcage with the breastbone highlighted", question: "The bone highlighted in the middle of the ribcage is called the:", options: ["Sternum", "Humerus", "Cranium", "Femur"], correctIndex: 0, explanation: "The highlighted bone is the sternum, or breastbone — the ribs attach to it at the front of the ribcage." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-03-backbone.jpg", imageAlt: "Anatomical illustration of a full skeleton with the spine highlighted in orange", question: "This long, central part of the skeleton is highlighted. What is it called?", options: ["Femur", "Humerus", "Backbone", "Ribcage"], correctIndex: 2, explanation: "The highlighted part is the backbone (vertebral column), made of 33 vertebrae." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-04-shoulder-girdle.jpg", imageAlt: "Anatomical illustration of the ribcage with the collarbones highlighted in orange", question: "The bones highlighted here join the arms to the spine. What is this structure called?", options: ["Hip girdle", "Shoulder girdle", "Skull", "Ribcage"], correctIndex: 1, explanation: "This is the shoulder girdle, which joins the upper limbs (arms) to the spine." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-05-hip-girdle.jpg", imageAlt: "Anatomical illustration of the hip girdle and thigh bones, with close-up views of the hip joint", question: "This image shows the bones that connect the spine to the legs, with the hip joint shown in detail on the right. What is this structure called?", options: ["Shoulder girdle", "Skull", "Hip girdle", "Backbone"], correctIndex: 2, explanation: "This is the hip girdle, which connects the spine to the lower limbs (legs)." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-06-bone-marrow.jpg", imageAlt: "Cross-section of a long bone showing the red, spongy bone marrow inside", question: "This cross-section shows the soft, spongy tissue found inside larger bones. What is this tissue called?", options: ["Cartilage", "Bone marrow", "Ligament", "Tendon"], correctIndex: 1, explanation: "Larger bones contain bone marrow, a spongy tissue that produces red blood cells (RBCs) and most white blood cells (WBCs)." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-07-humerus.jpg", imageAlt: "Anatomical illustration of the ribcage and arms, with the upper-arm bone highlighted in orange", question: "The bone of the upper arm is highlighted. What is it called?", options: ["Femur", "Sternum", "Humerus", "Mandible"], correctIndex: 2, explanation: "The highlighted bone is the humerus, the bone of the upper arm." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-08-kneecap.jpg", imageAlt: "Anatomical illustration of the knee joint with the rounded kneecap bone visible at the front", question: "The small, round bone shown at the front of this knee joint is called the:", options: ["Kneecap", "Femur", "Shoulder blade", "Skull"], correctIndex: 0, explanation: "This is the kneecap, which protects the knee joint." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-09-pivot-joint.jpg", imageAlt: "Anatomical illustration of the neck vertebrae and forearm bones, both showing rotating movement with arrows", question: "This diagram shows two examples of the same joint type — in the neck and in the forearm — both allowing a rotating movement. Which joint type is this?", options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Sliding joint"], correctIndex: 2, explanation: "This is a pivot joint — found between the head and the first two vertebrae of the spine, allowing the head to turn." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-10-hinge-joint.jpg", imageAlt: "Anatomical illustration of the leg with the knee joint highlighted in orange", question: "The highlighted joint here can only bend back and forth, like a door. Which joint is this?", options: ["Ball and socket joint", "Hinge joint", "Pivot joint", "Sliding joint"], correctIndex: 1, explanation: "The knee is a hinge joint, found also in the elbow, fingers and toes." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-11-ball-and-socket.jpg", imageAlt: "Anatomical illustration of the hip and leg with the hip joint highlighted in glowing blue", question: "The highlighted joint here lets the leg move in a wide circular motion. Which joint is this?", options: ["Sliding joint", "Pivot joint", "Ball and socket joint", "Hinge joint"], correctIndex: 2, explanation: "This is a ball and socket joint, found in the shoulders and hips." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-12-gliding-joint.jpg", imageAlt: "Anatomical illustration of the bones of the hand and wrist", question: "The many small bones in the wrist, shown here, allow small sliding movements. Which type of joint is this an example of?", options: ["Hinge joint", "Sliding (gliding) joint", "Ball and socket joint", "Pivot joint"], correctIndex: 1, explanation: "The wrist has a sliding (gliding) joint, found where the many small wrist bones meet — it also occurs at the ankle and between the vertebrae of the backbone." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-13-striated-muscle.jpg", imageAlt: "Anatomical illustration of the full body's muscular system, front and back views", question: "The muscles shown covering this entire body — in the arms, legs and torso — can be controlled by the person. What type of muscle is this?", options: ["Smooth muscle", "Cardiac muscle", "Voluntary (striated) muscle", "Involuntary muscle only"], correctIndex: 2, explanation: "Voluntary muscles are also called striated or striped muscles — their movement can be controlled, e.g. in the arms and legs." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-14-cardiac-muscle.jpg", imageAlt: "Anatomical illustration of the ribcage protecting the heart, lungs and other organs", question: "The ribcage in this image is protecting several organs, including the heart. Which type of muscle, found only in the heart, works non-stop without you controlling it?", options: ["Smooth muscle", "Voluntary muscle", "Cardiac muscle", "Skeletal muscle"], correctIndex: 2, explanation: "Cardiac muscles are found only in the heart. They work continuously, whether we are asleep or awake, and pump blood to different parts of the body." },
    { imageUrl: "assets/img/science-skeletal-muscular/imgq-15-smooth-muscle.jpg", imageAlt: "Anatomical illustration of the digestive organs, with a close-up inset of muscle tissue", question: "The close-up inset shows the muscle tissue found in organs like the stomach and intestine, where it helps move food along during digestion. Which muscle type is this?", options: ["Cardiac muscle", "Voluntary muscle", "Striated muscle", "Smooth muscle"], correctIndex: 3, explanation: "Smooth muscles are found in the stomach and intestine, and help move food during digestion." }
  ],

  /* ---------------------------------------------------------------
     15 REAL-WORLD SCENARIOS — original SVG illustrations, shown half-size
  --------------------------------------------------------------- */
  scenarios: [
    { imageUrl: "assets/img/science-skeletal-muscular/scn-01-broken-arm.jpg", imageAlt: "Photo of a child with their arm in a cast and sling", scenarioText: "A child fell down the stairs and hurt their arm. The doctor put the arm in a sling and said it would heal soon.", question: "Which body system includes the bone that the child hurt?", options: ["The muscular system", "The skeletal system", "The digestive system", "The nervous system"], correctIndex: 1, explanation: "Bones belong to the skeletal system, and broken bones can repair themselves over time." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-02-helmet.jpg", imageAlt: "Photo of a child wearing a cycling helmet while riding a bike", scenarioText: "Before riding his bicycle, this child always wears a helmet to protect his head.", question: "The helmet protects his head the same way which bony structure protects the brain?", options: ["The ribcage", "The skull", "The hip girdle", "The kneecap"], correctIndex: 1, explanation: "The skull surrounds and protects the brain, just like a helmet protects the head from the outside." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-03-head-shake.jpg", imageAlt: "Photo sequence of a person turning their head from facing forward to facing sideways", scenarioText: "This person turns their head from facing forward all the way to facing sideways, to look at something behind them.", question: "Which joint allows this turning movement of the head?", options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Sliding joint"], correctIndex: 2, explanation: "The pivot joint, between the head and the first two vertebrae, allows the head to move upward, downward and sideways." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-04-climb-stairs.jpg", imageAlt: "Photo of a person climbing stairs, bending their knee with each step", scenarioText: "This person bends their knee with every step while climbing the stairs, carrying a backpack.", question: "Which type of joint is being used to bend the knee like this?", options: ["Pivot joint", "Hinge joint", "Ball and socket joint", "Sliding joint"], correctIndex: 1, explanation: "The knee is a hinge joint, which allows back-and-forth bending movement, like a door hinge." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-05-bowling.jpg", imageAlt: "Photo sequence of a cricket bowler swinging their arm in a full circle", scenarioText: "This bowler swings his arm in a full circle before releasing the cricket ball.", question: "Which joint in the shoulder allows this circular arm movement?", options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Sliding joint"], correctIndex: 1, explanation: "The shoulder has a ball and socket joint, which allows circular movement of the arm." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-06-open-jar.jpg", imageAlt: "Photo of hands twisting open the lid of a jar", scenarioText: "This person twists their wrist and hand to open the lid of a jar.", question: "Which joint in the wrist allows this twisting movement?", options: ["Ball and socket joint", "Hinge joint", "Sliding (gliding) joint", "Pivot joint"], correctIndex: 2, explanation: "The wrist has a sliding (gliding) joint, which allows small sliding and twisting movements." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-07-running-heart.jpg", imageAlt: "Photo of a runner catching their breath, with a glowing heartbeat graphic", scenarioText: "After running, this runner notices her heart is beating fast — even though she isn't thinking about it at all.", question: "What type of muscle makes the heart beat without a person controlling it?", options: ["Voluntary muscle", "Smooth muscle", "Cardiac muscle", "Skeletal muscle"], correctIndex: 2, explanation: "Cardiac muscles are found only in the heart, work continuously without our control, and pump blood around the body." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-08-eating.jpg", imageAlt: "Photo of a person eating a meal, next to a diagram of the digestive system", scenarioText: "After a meal, the food this person ate slowly moves through her stomach and intestine as it is digested.", question: "Which type of muscle moves the food along the stomach and intestine?", options: ["Cardiac muscle", "Smooth muscle", "Voluntary muscle", "Striated muscle"], correctIndex: 1, explanation: "Smooth muscles, found in the stomach and intestine, contract and relax to help move food during digestion." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-09-lifting-bag.jpg", imageAlt: "Photo of a child bending to lift a heavy bag", scenarioText: "This child carefully lifts a heavy bag using his arm muscles, choosing exactly how much to lift.", question: "What type of muscles is he using, since he can control their movement?", options: ["Involuntary muscles", "Cardiac muscles", "Voluntary muscles", "Smooth muscles"], correctIndex: 2, explanation: "Voluntary muscles, like those in the arms, can be controlled — he decides when and how to lift the bag." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-10-baby-vs-child.jpg", imageAlt: "Photo of a young child sitting and playing with a baby", scenarioText: "This baby has more individual bones than his older sister, even though she is much bigger than him.", question: "Why does the baby have more bones than his older sister?", options: ["Babies grow extra bones over time", "Some of a baby's bones join together as they grow older", "Older children lose bones as they age", "Bone count has nothing to do with age"], correctIndex: 1, explanation: "A newborn baby has 300 to 305 bones. As the baby grows, some of these bones join together, leaving an adult with 206 bones." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-11-knee-pads.jpg", imageAlt: "Photo of a child roller-skating while wearing knee pads and a helmet", scenarioText: "Before skating, this child puts on knee pads to protect her knees if she falls.", question: "Which bone already protects the knee joint naturally, even without knee pads?", options: ["The kneecap", "The humerus", "The sternum", "The mandible"], correctIndex: 0, explanation: "The kneecap is a thick, round bone that protects the knee joint from getting hurt or damaged." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-12-backpack.jpg", imageAlt: "Photo of a child walking while wearing a backpack", scenarioText: "Even while carrying a heavy backpack, this child is able to stand and walk up straight because her back supports her.", question: "Which bony structure gives her body this support?", options: ["The ribcage", "The backbone (vertebral column)", "The skull", "The kneecap"], correctIndex: 1, explanation: "The backbone is a long, bony structure that provides support to the body." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-13-breathing.jpg", imageAlt: "Photo of a person taking a deep breath outdoors, with a lung graphic overlay", scenarioText: "This person takes a slow, deep breath outdoors, and her chest expands as her lungs fill with air.", question: "Which bones move outward as the chest expands like this?", options: ["The ribs", "The vertebrae", "The finger bones", "The ankle bones"], correctIndex: 0, explanation: "The ribcage, made up of the ribs and sternum, surrounds the lungs and moves as we breathe, while also protecting them." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-14-tooth.jpg", imageAlt: "Photo of a boy smiling and pointing to a gap where a tooth has fallen out", scenarioText: "This boy's baby tooth just fell out, and he is excited to put it under his pillow.", question: "According to what you have learnt, is his tooth actually a bone?", options: ["Yes, teeth are a type of bone", "No, teeth are not bones", "Only baby teeth are bones", "Only adult teeth are bones"], correctIndex: 1, explanation: "The jaw bones bear teeth, but teeth themselves are not bones." },
    { imageUrl: "assets/img/science-skeletal-muscular/scn-15-toe-touch.jpg", imageAlt: "Photo of a person bending forward to touch their toes", scenarioText: "During a warm-up stretch, this person bends forward smoothly to touch her toes.", question: "Which joints in the backbone let her bend forward like this?", options: ["Pivot joints", "Hinge joints", "Sliding (gliding) joints", "Ball and socket joints"], correctIndex: 2, explanation: "Sliding (gliding) joints between the vertebrae of the backbone allow it to bend, twist and turn." }
  ],

  /* ---------------------------------------------------------------
     VIDEOS & OFFICIAL LINKS
  --------------------------------------------------------------- */
  videos: [
    { title: "The Skeletal System — Class 5 (Kriti Educational Videos)", url: "https://www.youtube.com/watch?v=24jgE9rKE8o" },
    { title: "The Skeletal System | Human Skeleton — Class 5 Science", url: "https://www.youtube.com/watch?v=KQOgN9reko8" }
  ],
  links: [
    { title: "Your Bones (for Kids) — Nemours KidsHealth", url: "https://kidshealth.org/en/kids/bones.html" },
    { title: "How Does the Skeletal System Work? (Video for Kids) — Nemours KidsHealth", url: "https://kidshealth.org/en/kids/ssmovie.html" }
  ]
});
