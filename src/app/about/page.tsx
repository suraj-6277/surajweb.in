import { Quote, quotes } from "../../components/Quote";

const Page = () => {
  return (
    <div className="d-border-b">
      <div className="px-7 pt-4 pb-5">
        <div className="text-subtle space-y-6 leading-relaxed">
          <p>Hi,</p>
          <p>
            I'm <strong>Suraj Jadhav</strong>, a web developer who enjoys
            building practical and user-focused applications. I like turning
            ideas into real products that people can use.
          </p>
          <p>
            I focus on writing clean, efficient code and continuously improving
            my skills through hands-on projects.
          </p>
          <p>
            If you'd like to collaborate or connect, feel free to reach out.
          </p>
          <p>Looking forward to hearing from you.</p>
          <p className="mt-4">
            Best,
            <br />
            <strong>Suraj Jadhav</strong>
            <br />
            <a href="mailto:surajjadhav071204@gmail.com" className="text-blue-500">
              surajjadhav071204@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Quote quote={quotes.about.quote} author={quotes.about.author} />
    </div>
  );
};

export default Page;
