# 🚀 Developer Portfolio — Next.js

A modern, responsive portfolio template built with **Next.js**, **React**, **Tailwind CSS**, **Sass**, and **Framer Motion**.

This repository can be used as a starting point for creating and customizing a personal developer, QA, engineering, or technical portfolio.

---

## 🛠️ Tech Stack

- **Next.js**
- **React**
- **Tailwind CSS**
- **Sass**
- **Framer Motion**
- **React Icons**
- **Lottie React**
- **React Toastify**
- **EmailJS**

---

## 📋 Requirements

Before starting, make sure the following tools are installed:

- Node.js
- npm or Yarn
- Git

Check your installed versions:

```bash
node -v
npm -v
git --version
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/naufalazhar65/NAUFAL-PORTFOLIO-V3.git
```

Move into the project directory:

```bash
cd NAUFAL-PORTFOLIO-V3
```

---

## 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn
```

---

## 3. Create Environment Variables

Create a `.env.local` file in the project root:

```text
.env.local
```

Add:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

These variables are used by the contact form.

> Never commit `.env.local` to Git.

The repository already ignores local environment files through `.gitignore`.

---

# 📧 Configure EmailJS

The contact form uses **EmailJS** to send messages.

## 1. Create an EmailJS Account

Create an account at:

https://www.emailjs.com/

## 2. Create an Email Service

Create an EmailJS service and connect your email provider.

Copy the generated **Service ID** and add it to:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
```

Example:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
```

## 3. Create an Email Template

Create a template that uses:

```text
{{name}}
{{email}}
{{message}}
```

Example:

```html
<div style="margin:0;padding:32px 16px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#171717;">
  <div style="width:100%;max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;">
    <div style="padding:28px 32px;border-bottom:1px solid #e5e5e5;">
      <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:#737373;">
        Portfolio Contact
      </p>
      <h1 style="margin:0;font-size:24px;line-height:1.3;font-weight:600;color:#111111;">
        New message from your portfolio
      </h1>
    </div>

    <div style="padding:28px 32px 20px;">
      <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#737373;">
        From
      </p>
      <p style="margin:0 0 20px;font-size:16px;line-height:1.5;font-weight:600;color:#111111;">
        {{name}}
      </p>

      <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#737373;">
        Email
      </p>
      <p style="margin:0;font-size:15px;line-height:1.5;color:#404040;">
        <a href="mailto:{{email}}" style="color:#111111;text-decoration:none;">
          {{email}}
        </a>
      </p>
    </div>

    <div style="padding:8px 32px 32px;">
      <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#737373;">
        Message
      </p>

      <div style="padding:18px 20px;border-left:3px solid #171717;background:#f8f8f8;">
        <p style="margin:0;font-size:15px;line-height:1.8;color:#333333;white-space:pre-line;">
          {{message}}
        </p>
      </div>
    </div>

    <div style="padding:20px 32px;border-top:1px solid #e5e5e5;background:#fafafa;">
      <p style="margin:0;font-size:12px;line-height:1.6;color:#737373;">
        This message was sent through the contact form on the portfolio website.
      </p>
    </div>
  </div>
</div>
```

Copy the **Template ID** into:

```env
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
```

## 4. Configure Email Delivery

In the EmailJS template settings:

**To Email**

Use the email address that should receive messages from the portfolio.

Do not use:

```text
{{email}}
```

as the recipient.

**Reply To**

Use:

```text
{{email}}
```

This allows replies to go directly to the person who submitted the form.

## 5. Add the Public Key

Copy the EmailJS **Public Key** and add it to:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Your final `.env.local` should look like:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

Restart the development server after changing environment variables:

```bash
npm run dev
```

---

# ▶️ Run the Portfolio

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# 📂 Project Structure

```text
app
├── about
├── contact
├── projects
│   └── [slug]
├── skills
├── components
├── css
└── layout.js

public
├── image
├── svg
└── lottie

utils
├── data
└── skill-image.js
```

Dynamic project pages are handled through:

```text
app/projects/[slug]/
```

For example:

```text
/projects/my-project
```

---

# ✏️ Customize the Portfolio

Most portfolio content can be changed from the existing data and component files.

Typical content includes:

```text
Personal information
Experience
Education
Skills
Projects
Social links
Contact information
```

---

# 👤 Update Personal Information

Find the relevant data files inside:

```text
utils/data/
```

Update your content while keeping the existing object structure.

For example:

```js
{
  name: "Your Name",
  role: "Your Role",
  location: "Your Location",
}
```

Keep the property names expected by the existing components.

---

# 🛠️ Customize Skills

Skills are managed inside:

```text
app/components/skills/
```

The main skill definitions are stored in:

```text
app/components/skills/constants.js
```

Example:

```js
export const skillGroups = [
  {
    title: "Programming",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
    ],
  },
];
```

To add a skill:

1. Add the skill name to a skill group.
2. Make sure its icon is available in the skill image mapping.
3. Reload the application.

Skill icons are mapped through:

```text
utils/skill-image.js
```

---

# 📁 Customize Projects

Project data is stored in:

```text
utils/data/projects-data.js
```

A project can contain:

```text
id
slug
name
category
year
status
role
image
gallery
summary
description
challenge
solution
highlight
tools
features
stats
workflow
repository
github
live
```

Example:

```js
{
  id: 1,
  slug: "my-project",

  name: "My Project",
  category: "Automation",

  year: "2026",
  status: "Completed",
  role: "Developer",

  summary:
    "Short project summary.",

  description:
    "Longer project description.",

  github:
    "https://github.com/username/project",

  live:
    "https://example.com",
}
```

The `slug` is used to create the project detail URL:

```text
/projects/my-project
```

---

# 🖼️ Add Project Images

Project images can be placed inside:

```text
public/
```

Common asset directories include:

```text
public/image/
public/svg/
public/lottie/
```

Import the image into the appropriate data file and reference it from the project configuration.

---

# 🎨 Customize the Design

Global styling is managed in:

```text
app/css/globals.scss
```

This file contains:

- Global colors
- Typography
- Layout
- Borders
- Responsive styling
- Component styling
- Mobile adjustments

Global CSS variables are defined in:

```scss
:root {
  --background: #000000;
  --foreground: #ffffff;
  --muted: #a1a1aa;
  --subtle: #71717a;
  --border: #242424;
  --border-hover: #3f3f46;
  --surface: #080808;
  --surface-hover: #111111;
  --max-width: 1280px;
}
```

You can adjust these values to change the overall visual direction.

---

# 📄 Customize Pages

Main pages are located under:

```text
app/
```

Common pages include:

```text
app/about/
app/contact/
app/projects/
app/skills/
```

Page-specific UI components are located close to the page that uses them.

For dynamic project pages:

```text
app/projects/[slug]/
```

---

# 🔗 Update Navigation

Navigation components can be found in the corresponding component directories.

When adding or removing pages, make sure links used throughout the portfolio are updated as well.

---

# 🧪 Validate Your Changes

Before committing changes, run:

```bash
npm run lint
```

Then run:

```bash
npm run build
```

If both commands complete successfully, test the production build locally:

```bash
npm run start
```

Then open:

```text
http://localhost:3000
```

---

# 🚢 Deployment

This project can be deployed to platforms that support Next.js.

## Netlify

### 1. Connect the Repository

Create a new Netlify site and connect the Git repository.

### 2. Configure the Build Command

Use:

```text
npm run build
```

### 3. Configure Environment Variables

Add these variables in the Netlify project settings:

```text
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

### 4. Deploy

Trigger the deployment from Netlify.

After deployment, verify:

- Homepage
- About page
- Skills page
- Project pages
- Contact form
- External links
- Mobile layout

---

# 🔐 Environment Files

Local environment files should not be committed.

The project ignores:

```text
.env
.env.local
.env*.local
```

Keep local configuration inside:

```text
.env.local
```

For deployment, configure the same variables directly in the hosting platform.

---

# 📦 Useful Commands

## Install dependencies

```bash
npm install
```

## Start development

```bash
npm run dev
```

## Run lint

```bash
npm run lint
```

## Create production build

```bash
npm run build
```

## Start production server

```bash
npm run start
```

---

# ✅ Recommended Workflow

After cloning the repository:

```text
1. Install dependencies
2. Create .env.local
3. Configure EmailJS
4. Update personal data
5. Update skills
6. Update projects
7. Replace images
8. Adjust styling
9. Run lint
10. Run production build
11. Deploy
```

Then verify the deployed site on both desktop and mobile.

---

# 📄 License

This project is licensed under the MIT License.
