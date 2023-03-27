import React from "react";
import Accordion from "../components/accordion";
import faqData from "../fixtures/faqs.json"
import OptForm from "../components/opt-form";

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
        <Accordion.Item/>
        <OptForm>
            <OptForm.Input placeholder="Email address"/>
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break/>
            <OptForm.Text>
                Ready to watch? Enter your email to create or restart your membership
            </OptForm.Text>
        </OptForm>
    </Accordion>)
}
