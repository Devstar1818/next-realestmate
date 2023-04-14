import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleLeft} fontSize="2xl" onClick={() => scrollPrev()} cursor="pointer" />
        </Flex>
    )
}
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleRight} fontSize="2xl" onClick={() => scrollNext()} cursor="pointer" />
        </Flex>
    )
}

const ImageScrollbar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: "hidden" }}>
        {data.map((image) => (
            <Box key={image.id} width="910px" itemID={image.id} overflow="hidden" p="1">
                <Image alt="property"
                    placeholder="blur"
                    blurDataURL={image.url}
                    src={image.url}
                    width={1000}
                    height={500}
                    sizes="(max-width: 500px) 100px, (max-width: 1024px) 400px, 1000px"
                />
            </Box>
        ))}
    </ScrollMenu>
)

export default ImageScrollbar;