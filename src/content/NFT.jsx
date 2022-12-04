import { useState } from "react";
import { send } from "@emailjs/browser";
import { HashScroll } from "react-hash-scroll";
import "../styles/Nft.scss";

const serviceId = "service_i4wa70d";
const templateId = "template_jjj5zi2";
const userId = "7eYyZLyXdx8f96c4e";

const defaultFormState = {
  name: "",
  email: "",
  telegram: "",
  budget: "",
  message: "",
};

export const NFT = () => {
  const [toSend, setToSend] = useState(defaultFormState);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const handleThanks = () => {
    setToSend(defaultFormState);
    setSending(false);
    setMessage("Thanks for your request, we will be in touch soon!");
  };

  const handleError = () => {
    setSending(false);
    setMessage("Something went wrong. Please try again.");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    send(serviceId, templateId, toSend, userId)
      .then((_response) => {
        handleThanks();
      })
      .catch((_err) => {
        handleError();
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <HashScroll hash="nft">
      <article id="nft">
        <div className="content">
          <div className="heading">
            <h5>Custom Ember NFTs</h5>
            <h2>Let's Bring Your Ideas to Life</h2>
          </div>
          <div className="row">
            <div className="col">
              <p>
                We are excited to announce the latest creative addition to the
                Ember ecosystem: CUSTOM NFTS! Our CEO and NFT artist, JR
                (RedBeard), has been inundated with requests for custom-themed
                Ember NFTs and we will be taking custom order requests through
                the contact form. Select your desired budget, provide us with
                your creative vision, and JR will reach out directly via
                Telegram to collaborate and bring your unique vision to life!
                These NFTs are hand-made, one-of-a-kind designs and will be
                created on a first-come, first-served basis.
              </p>
              <p>
                Due to the personalized service and custom nature of these,
                pricing will start at <strong>3 BNB</strong> and will be quoted
                based on the desired level of detail and uniqueness.
              </p>
            </div>
            <div className="col form">
              <form onSubmit={onSubmit}>
                <h2>
                  Start <strong>here.</strong>
                </h2>
                {message && (
                  <div className="row">
                    <h2>{message}</h2>
                  </div>
                )}
                <label htmlFor="name">
                  Name <sup>*</sup>
                </label>
                <input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required={true}
                  type="text"
                  value={toSend.name}
                />

                <label htmlFor="email">
                  Email <sup>*</sup>
                </label>
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required={true}
                  type="email"
                  value={toSend.email}
                />
                <label htmlFor="telegram">
                  Telegram Username <sup>*</sup>
                </label>
                <input
                  id="telegram"
                  name="telegram"
                  onChange={handleChange}
                  required={true}
                  type="text"
                  value={toSend.telegram}
                />
                <label htmlFor="budget">
                  Your Budget (BNB) <sup>*</sup>
                </label>
                <select
                  id="budget"
                  name="budget"
                  onChange={handleChange}
                  required={true}
                  value={toSend.budget}
                >
                  <option value="none">- Select -</option>
                  <option value="standard">3-6 (Standard)</option>
                  <option value="detailed">6-9 (Very Detailed)</option>
                  <option value="max">10+ (Full Send)</option>
                </select>
                <label htmlFor="message">
                  Custom Order Details <sup>*</sup>
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  required={true}
                  rows={4}
                  value={toSend.message}
                />
                <button type="submit" className="pill red">
                  {sending ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </HashScroll>
  );
};
