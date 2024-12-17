import { Link } from "@remix-run/react";
import { List, ListItem, ListItemGraphic, ListItemText } from '@rmwc/list';
import { Icon } from '@rmwc/icon';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

//sonar.issue.ignore.multicriteria=e1
//sonar.issue.ignore.multicriteria.e1.ruleKey=typescript:S6759
//sonar.issue.ignore.multicriteria.e1.resourceKey=path/to/file.ts 
//needs to be fixed
const ResourceItem = ({ text, icon, to, href, external }: {text: string, icon: string, to?: string, href?: string, external?: boolean}) => (
    <ListItem
        tag={external ? 'a' : Link}
        to={to}
        href={href || to}
        target={external ? '_blank' : undefined} // Open external links in new tab
        rel={external ? 'noopener noreferrer' : undefined} // Add rel attributes for security
    >
        <ListItemGraphic icon={<Icon icon={icon} />} />
        <ListItemText>{text}</ListItemText>
    </ListItem>
);


export default function Index() {
    return (
    <List>
        {resources.map((resource) => (
            <ResourceItem key={resource.to || resource.href} {...resource} />
        ))}
    </List>
    );
}


const resources = [
    { to: "/data", text: "Data Visualization", icon: "show_chart" },
    { to: "/requirements", text: "Requirements", icon: "settings" },
    { to: "/about", text: "About Dean Machines", icon: "info" },
    { href: "https://remix.run/docs", text: "Remix Docs", icon: "book", external: true },
    { href: "https://rmx.as/discord", text: "Join Discord", icon: "chat", external: true },
];
