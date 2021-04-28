import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

import Image from "next/image";

function index() {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "5rem",
      }}
    >
      {/* main continer */}
      <Box style={{ width: "600px" }}>
        {/* Title */}
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant={"h4"} style={{ fontWeight: "bold" }}>
            What is Higher Order function and why we use ?
          </Typography>
        </Box>

        {/* User card */}

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              //   backgroundColor: "red",

              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              src={"/image/mohit.jpg"}
              alt={"Mohit Sojitra"}
              width={50}
              height={50}
            />
          </Box>

          <Box>
            <Typography
              variant={"h6"}
              style={{ marginLeft: "10px", fontSize: "14px" }}
            >
              Mohit Sojitra
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={"body1"}
              style={{
                fontSize: "14px",
                marginLeft: "10px",
                color: "rgb(117,117,117)",
              }}
            >
              28 Apr 2021
            </Typography>
          </Box>
        </Box>

        {/* main content */}

        <Box style={{ marginTop: "1rem" }}>
          <Image
            src={"/image/higherOrderFun.jpeg"}
            width={500}
            height={300}
            style={{ margin: " 0 1rem" }}
          />
        </Box>

        <Box style={{ marginTop: "2.5rem" }}>
          <Typography variant={"h6"}>
            {" "}
            Here we will see every thing about the heigher order function with
            understandable example.
          </Typography>

          <Typography style={{ marginTop: "2.5rem", fontSize: "1rem" }}>
            {" "}
            <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Defination{" "}
            </span>
            <span style={{ fontSize: "1.5rem" }}>
              : A higher-order function is a function that takes one or more
              functions as arguments.
            </span>
          </Typography>

          <Typography
            style={{ marginTop: "2.5rem", fontSize: "1.2rem" }}
            variant={"body1"}
          >
            Here you simply read a once this defination, at the and of the blog
            you return here and one more time read this defination. I damn sure
            you definetly see diffrence between before you read blog and after
            the reading of the whole blog.
          </Typography>

          <br />
          <br />
          <Box>
            <Typography variant={"h5"} style={{ fontWeight: "bold" }}>
              Q1. if i say please make an function which return 10 square then
              what you do ?.
            </Typography>
            <Typography
              variant={"h6"}
              style={{
                fontWeight: "900",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              May be your answer is...
            </Typography>
            <Image
              src={"/image/tenSquare.png"}
              width={400}
              height={200}
              style={{ margin: " 0 1rem" }}
            />
          </Box>

          <Box>
            <Typography
              variant={"h5"}
              style={{ fontWeight: "bold", marginTop: "3rem" }}
            >
              Q2. Now waht happen if i say i want to nine square function ?.
            </Typography>
            <Typography
              variant={"h6"}
              style={{
                fontWeight: "900",
                marginTop: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              May be your answer is...
            </Typography>
            <Image
              src={"/image/nineSquare.png"}
              width={400}
              height={200}
              style={{ margin: " 0 1rem" }}
            />
          </Box>

          <Box>
            <Typography
              variant={"h5"}
              style={{ fontWeight: "bold", marginTop: "3rem" }}
            >
              Q3. Now if i say i want to get 125 square then?.
            </Typography>
            <Typography>
              <Typography
                variant={"h6"}
                style={{
                  fontWeight: "900",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                {" "}
                May be you do above function re write below the 9 square
                function. but this is right way to give answer? No. because it
                break the coding rules. can you guess which rule ?
              </Typography>
            </Typography>
            <Typography
              variant={"body1"}
              style={{ fontSize: "1rem", fontWeight: "600" }}
            >
              Yes it break dry rule, which say that dont repeate your self. then
              what is the solution, I damn sure you already know what is
              solution.
            </Typography>
            <Typography
              variant={"body2"}
              style={{ fontSize: "1rem", fontWeight: "600" }}
            >
              Yes we can pass the argument in the function and return suqre of
              the parameter of the function just like below.
            </Typography>
            <Image
              src={"/image/square.png"}
              width={400}
              height={100}
              style={{ margin: " 0 1rem" }}
            />
          </Box>

          <Box>
            <Typography
              variant={"h5"}
              style={{ fontWeight: "bold", marginTop: "3rem" }}
            >
              Q4. Now we go to one more step ahead, now i say you make one more
              function which take an array argument return square of those
              array.
            </Typography>
            <Typography
              variant={"h6"}
              style={{
                fontWeight: "900",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              {" "}
              May be your answer is...
            </Typography>
            <Image
              src={"/image/squareOfArray.png"}
              width={400}
              height={250}
              style={{ margin: " 0 1rem" }}
            />
          </Box>

          <Box>
            <Typography
              variant={"h5"}
              style={{ fontWeight: "bold", marginTop: "3rem" }}
            >
              Q5. Now make one more function which add 3 in every item of the
              array.
            </Typography>
            <Typography
              variant={"h6"}
              style={{
                fontWeight: "900",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              May be your answer is...
            </Typography>
            <Image
              src={"/image/addThree.png"}
              width={400}
              height={350}
              style={{ margin: " 0 1rem" }}
            />
          </Box>

          <Box>
            <Typography
              variant={"h5"}
              style={{ fontWeight: "bold", marginTop: "3rem" }}
            >
              Q6. Now if i say make one more function which multiplyEvery item
              with 10 then what you do ?
            </Typography>
            <Typography
              variant={"body1"}
              style={{ fontSize: "1.2rem", fontWeight: "400" }}
            >
              Understand the what is problem here. You might notice that here we
              also do same thing multiple time which is we declare the function,
              pass the argument array, create a result arrya and iterate the
              parameter array arr and make some operation and put resultant
              value in result array and finaly we return the result array.
            </Typography>
            <Typography
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                fontWeight: "800",
              }}
            >
              That means we here also break the rule of DRY (DO NOT REPEAT YOUR
              SELF).
            </Typography>
            <Typography style={{ marginBottom: "1rem" }} variant={"body1"}>
              Then what is the solution ?
            </Typography>
            <Typography style={{ marginBottom: "1rem" }} variant={"body1"}>
              The solution is higher order function.
            </Typography>
            <Typography style={{ marginBottom: "1rem" }} variant={"body1"}>
              You do same thing like below.
            </Typography>

            <Image
              src={"/image/heighrOrderFun.png"}
              width={500}
              height={500}
              style={{ margin: " 0 1rem" }}
            />
          </Box>
          <Box>
            <Typography
              variant={"body1"}
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              In first situation we clearly see the the differnce between the
              <span style={{ letterSpacing: "1px" }}>
                squareOfTheArray , addThreeInEveryItem and
                multiplyByTenWithEveryItem function.
              </span>{" "}
            </Typography>
            <Typography
              style={{ marginTop: "1.5rem", fontSize: "1rem" }}
              variant={"body1"}
            >
              The diffrence is in whole function only one line is change which
              is the operational line, ex squareTheItem, add 3 and multiply 10.
              so we create a another function which only do the operational
              instruction and pass that function as a argument.
            </Typography>
            <Typography style={{ marginTop: "1.5rem" }}>
              So What we do here we make a function which is
              doSomeThingWithArray and pass the argument, one is array and
              another is function defination.
            </Typography>
            <Typography style={{ marginTop: "2.5rem", fontSize: "1.5rem" }}>
              Example of heighr order function : map , filter, reduce etc. Can
              you relate this scene with this concept ?
            </Typography>
            <Typography style={{ marginTop: "1.5rem" }} variant={"h3"}>
              Now its time to re read the defination.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default index;
