import React from "react";
import { Button, Center, Tooltip } from "@chakra-ui/react";
import toast from "react-simple-toasts";

export default function pushOptin({ OptInChannel }) {
  return (
    <div>
      <Center>
        <Tooltip
          label="Subscribe to updates on Instax finance"
          bg="#0E1E1F"
          color="#BBFF00"
          aria-label="A tooltip"
          mx="lg"
          my="lg"
        >
          <Button
            onClick={() => {
              OptInChannel;
              toast(
                <b style={{ color: "#BBFF00" }}>
                  Hi there, Welcome to Intstax, Thank you for subscribing to the
                  Channel for updates
                </b>,

                {
                  time: 5000,
                  position: "top-center",
                  clickable: true,
                  clickClosable: true,
                  className: "custom-toast",
                  backgroundColor: "#0E1E1F",
                }
              );
            }}
            borderColor="#BBFF00"
            color="#BBFF00"
            variant="outline"
            size="lg"
            _hover={{ bg: "#0E1E1F" }}
            my="15%"
            px={12}
          >
            Subscribe
          </Button>
        </Tooltip>
      </Center>
    </div>
  );
}
