import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import AspectRatio from "@mui/joy/AspectRatio";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
const Promotejob = () => {
  const [showModal, setShowModal] = React.useState(false);
  const catMenu2 = useRef<HTMLDivElement | null>(null);
  const closeOpenMenus2 = (e: MouseEvent) => {
    if (
      showModal &&
      catMenu2.current &&
      !catMenu2.current.contains(e.target as Node)
    ) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus2);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus2);
    };
  }, [showModal]);
  return (
    <div>
      <div className="flex justify-start">
        <button
          onClick={(e) => {
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit p-2 px-6"
        >
          Post Job <FaArrowRight />
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center overflow-y-hidden items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="space-y-6 bg-white w-fit p-8">
                <div className="grid gap-2">
                  <h1 className="text-2xl">
                    🎉 Congratulation, Your Job is successfully posted!
                  </h1>
                  <p className="text-gray-500 text-sm">
                    You can manage your form my-jobs section in your dashboard
                  </p>
                  <button className="flex w-fit items-center gap-2 rounded-sm p-2 px-4 text-blue-600 border border-blue-800">
                    View Jobs <FaArrowRight />
                  </button>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <h1 className="flex items-center gap-1 text-lg font-medium">
                      Promote Job:<p>UI/UX Designer</p>
                    </h1>
                    <p className="text-gray-500 text-sm w-[500px]">
                      Fusce commodo, sem non tempor convallis, sapien turpis
                      bibendum turpis, non pharetra nisl velit pulvinar lectus.
                      Suspendisse varius at nisl aliquam.
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="">
                      <Stack spacing={1} useFlexGap>
                        <Card
                          variant="outlined"
                          sx={{ width: 300, height: 220 }}
                        >
                          <CardContent orientation="horizontal">
                            <Skeleton
                              animation="wave"
                              variant="circular"
                              width={48}
                              height={48}
                            />
                            <div>
                              <Skeleton
                                animation="wave"
                                variant="text"
                                sx={{ width: 120 }}
                              />
                              <Skeleton
                                animation="wave"
                                variant="text"
                                level="body-sm"
                                sx={{ width: 200 }}
                              />
                            </div>
                          </CardContent>
                          <AspectRatio ratio="12/1">
                            <Skeleton animation="wave" variant="overlay">
                              <img
                                alt=""
                                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                              />
                            </Skeleton>
                          </AspectRatio>
                          <Typography sx={{ overflow: "hidden" }}>
                            <Skeleton animation="wave">
                              Lorem ipsum is placeholder text commonly used in
                              the graphic, print, and publishing industries.
                            </Skeleton>
                          </Typography>
                          <Button>
                            Read more
                            <Skeleton animation="wave" />
                          </Button>
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="abc"
                              id=""
                              className="rounded-full p-2"
                            />
                            <h1 className="text-lg font-medium">
                              Featured Your Job
                            </h1>
                          </div>
                        </Card>
                      </Stack>
                    </div>
                    <div>
                      <Stack spacing={1} useFlexGap>
                        <Card
                          variant="outlined"
                          sx={{ width: 300, height: 220 }}
                        >
                          <CardContent orientation="horizontal">
                            <Skeleton
                              animation="wave"
                              variant="circular"
                              width={48}
                              height={48}
                            />
                            <div>
                              <Skeleton
                                animation="wave"
                                variant="text"
                                sx={{ width: 120 }}
                              />
                              <Skeleton
                                animation="wave"
                                variant="text"
                                level="body-sm"
                                sx={{ width: 200 }}
                              />
                            </div>
                          </CardContent>
                          <AspectRatio ratio="12/1">
                            <Skeleton animation="wave" variant="overlay">
                              <img
                                alt=""
                                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                              />
                            </Skeleton>
                          </AspectRatio>
                          <Typography sx={{ overflow: "hidden" }}>
                            <Skeleton animation="wave">
                              Lorem ipsum is placeholder text commonly used in
                              the graphic, print, and publishing industries.
                            </Skeleton>
                          </Typography>
                          <Button>
                            Read more
                            <Skeleton animation="wave" />
                          </Button>
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="abc"
                              id=""
                              className="rounded-full p-2"
                            />
                            <h1 className="text-lg font-medium">
                              Highlight Your Job
                            </h1>
                          </div>
                        </Card>
                      </Stack>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <button
                      onClick={(e) => {
                        setShowModal(false);
                      }}
                      className="text-gray-500"
                    >
                      Skip Now
                    </button>
                    <button className="flex items-center gap-2 p-2 px-4 rounded text-white bg-blue-700">
                      Promote Now <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Promotejob;
