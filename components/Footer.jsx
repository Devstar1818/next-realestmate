import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100" >
        <Link href="https://hamzii.me" passHref><Text textDecoration="underline" fontSize="sm" fontWeight="bold" textTransform="uppercase">Developed with ❤ By Hamza</Text></Link>
        <Text>2022 &copy; Real Estate, Inc. All rights reserved.</Text>
    </Box>
)

export default Footer