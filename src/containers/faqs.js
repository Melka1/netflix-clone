import React from "react";
import Accordion from "../components/accordion";
import faqData from "../fixtures/faqs.json"

export default function FaqsAccordion() {
    return (
    <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {
            faqData.map(faq => 
                <Accordion.Item key={faq.id}>
                    <Accordion.Header>{faq.header}</Accordion.Header>
                    <Accordion.Body>{faq.body}</Accordion.Body>
                </Accordion.Item>    
            )
        }
    </Accordion>)
}
