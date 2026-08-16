import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import * as library from "../components/comic-ui";
import { Alert, AlertDescription, AlertTitle } from "../components/comic-ui/alert";
import { Badge } from "../components/comic-ui/badge";
import { Button } from "../components/comic-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/comic-ui/card";
import { Checkbox } from "../components/comic-ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../components/comic-ui/dialog";
import { Input } from "../components/comic-ui/input";
import { Label } from "../components/comic-ui/label";
import { Switch } from "../components/comic-ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/comic-ui/tabs";
import { Textarea } from "../components/comic-ui/textarea";
import { cn } from "../components/comic-ui/utils";

describe("cn", () => {
  it("merges class names and resolves tailwind conflicts", () => {
    expect(cn("p-2", "text-sm")).toBe("p-2 text-sm");
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("p-2", false && "hidden", undefined)).toBe("p-2");
  });
});

describe("Button", () => {
  it("renders its children and handles clicks", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Kapow</Button>);

    const button = screen.getByRole("button", { name: "Kapow" });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("supports variants, sizes and the asChild slot", () => {
    const { rerender } = render(
      <Button variant="destructive" size="lg">
        Boom
      </Button>,
    );
    expect(screen.getByRole("button", { name: "Boom" }).className).not.toBe("");

    rerender(
      <Button asChild>
        <a href="/docs">Docs</a>
      </Button>,
    );
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute("href", "/docs");
  });

  it("forwards refs to the underlying element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

describe("layout and content components", () => {
  it("renders a card with all of its slots", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    for (const text of ["Title", "Description", "Content", "Footer"]) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });

  it("renders alerts and badges", () => {
    render(
      <>
        <Alert>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>Something happened</AlertDescription>
        </Alert>
        <Badge variant="secondary">New</Badge>
      </>,
    );

    expect(screen.getByText("Heads up")).toBeInTheDocument();
    expect(screen.getByText("Something happened")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });
});

describe("form components", () => {
  it("associates a label with an input and accepts typing", () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="you@example.com" />
      </>,
    );

    const input = screen.getByLabelText("Email");
    fireEvent.change(input, { target: { value: "hi@example.com" } });
    expect(input).toHaveValue("hi@example.com");
  });

  it("renders a textarea", () => {
    render(<Textarea placeholder="Say something" />);
    expect(screen.getByPlaceholderText("Say something")).toBeInTheDocument();
  });

  it("toggles a checkbox", () => {
    render(<Checkbox aria-label="accept" />);
    const checkbox = screen.getByRole("checkbox", { name: "accept" });

    expect(checkbox).toHaveAttribute("data-state", "unchecked");
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "checked");
  });

  it("toggles a switch", () => {
    render(<Switch aria-label="dark mode" />);
    const toggle = screen.getByRole("switch", { name: "dark mode" });

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("data-state", "checked");
  });
});

describe("interactive radix wrappers", () => {
  it("switches tab panels", () => {
    render(
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">First panel</TabsContent>
        <TabsContent value="two">Second panel</TabsContent>
      </Tabs>,
    );

    expect(screen.getByText("First panel")).toBeInTheDocument();
    const secondTab = screen.getByRole("tab", { name: "Two" });
    fireEvent.mouseDown(secondTab);
    fireEvent.click(secondTab);
    expect(screen.getByText("Second panel")).toBeInTheDocument();
  });

  it("opens a dialog from its trigger", () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>Dialog description</DialogDescription>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.queryByText("Dialog title")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Dialog title")).toBeInTheDocument();
  });
});

describe("public barrel", () => {
  it("exports every documented entry point", () => {
    const expected = [
      "Accordion",
      "Alert",
      "AlertDialog",
      "AspectRatio",
      "Avatar",
      "Badge",
      "Breadcrumb",
      "Button",
      "Calendar",
      "Card",
      "Carousel",
      "Checkbox",
      "Collapsible",
      "Dialog",
      "Drawer",
      "HoverCard",
      "Input",
      "Label",
      "Popover",
      "Progress",
      "RadioGroup",
      "ScrollArea",
      "Select",
      "Separator",
      "Sheet",
      "Skeleton",
      "Slider",
      "Switch",
      "Table",
      "Tabs",
      "Textarea",
      "Toast",
      "Toggle",
      "Tooltip",
      "cn",
    ];

    for (const name of expected) {
      expect(library, `missing export: ${name}`).toHaveProperty(name);
    }
  });

  it("does not export undefined values", () => {
    for (const [name, value] of Object.entries(library)) {
      expect(value, `export ${name} is undefined`).toBeDefined();
    }
  });
});
