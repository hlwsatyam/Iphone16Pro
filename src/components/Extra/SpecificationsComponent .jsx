import React, { useState } from "react";
import { FaApple, FaRegStar } from "react-icons/fa";
import { HiOutlineChip, HiOutlineDeviceMobile } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const specifications = {
  general: {
    color: "Black Titanium",
    brand: "Apple",
    model: "16 Pro",
    subBrand: "iPhone",
  },
  hardware: {
    processor: "A18 Pro Chip",
    os: "iOS 18",
  },
  connectivity: {
    sim: "Dual SIM (Nano + eSIM)",
    usb: "USB‑C Charge Cable",
    fiveG: "Yes",
  },
  battery: {
    quickCharge: "Yes",
  },
  display: {
    screenSize: "15.93 cm - 6.3 inch",
    selfieCamera: "12 MP",
    rearCamera: "48 MP, 48 MP, 12 MP",
    resolution: "2622 x 1206 px",
    displayType: "Super Retina XDR",
  },
  audioVideo: {
    audioFormats: "AAC, MP3, FLAC",
    videoFormats: "HEVC, H.264",
  },
  additionalFeatures: {
    wirelessCharging: "Yes",
    features: "Dolby Atmos, ProRes Video",
  },
  boxWarranty: {
    inTheBox: "1 N USB-C Charge Cable (1 m), 1 N Documentation",
    warranty: "1 Year",
  },
  customerCare: {
    phone: "1800-889-1055",
    email: "reliancedigital@ril.com",
    address: "Reliance Digital, Court House, Lokmanya Tilak Marg, Mumbai",
  },
};



 





const styles = {
  container: {
    maxWidth: "auto",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "20px",
  },
  subTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    color: "black",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
    color: "black",
  },
  listItem: {
    fontSize: "16px",
    marginBottom: "8px",
  },
  icon: {
    marginRight: "8px",
    color: "#0071e3",
  },
  infoSection: {
    display: "flex",
    gap: 34,
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  column: {
    flex: 1,
    maxWidth: "300px",
  },
};

const SpecificationsComponent = () => {
  return (
    <div class="container">
      {/* Title */}
      <div style={styles.sectionTitle}>Apple iPhone 16 Pro 1 TB</div>
      <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>
        Black Titanium
      </p>

      {/* General Information */}
      <div style={styles.infoSection}>
        <div style={styles.column}>
          <div style={styles.subTitle}>
            <FaApple style={styles.icon} />
            General Information
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Brand:</strong> {specifications.general.brand}
            </li>
            <li style={styles.listItem}>
              <strong>Model:</strong> {specifications.general.model}
            </li>
            <li style={styles.listItem}>
              <strong>Colour:</strong> {specifications.general.color}
            </li>
          </ul>
        </div>

        {/* Hardware */}
        <div style={styles.column}>
          <div style={styles.subTitle}>
            <HiOutlineChip style={styles.icon} />
            Phone Hardware & Storage
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Processor:</strong> {specifications.hardware.processor}
            </li>
            <li style={styles.listItem}>
              <strong>Operating System:</strong> {specifications.hardware.os}
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <div style={styles.subTitle}>
            <HiOutlineChip style={styles.icon} />
            Phone Hardware & Storage
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Processor:</strong> {specifications.hardware.processor}
            </li>
            <li style={styles.listItem}>
              <strong>Operating System:</strong> {specifications.hardware.os}
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <div style={styles.subTitle}>
            <HiOutlineChip style={styles.icon} />
            Phone Hardware & Storage
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Processor:</strong> {specifications.hardware.processor}
            </li>
            <li style={styles.listItem}>
              <strong>Operating System:</strong> {specifications.hardware.os}
            </li>
          </ul>
        </div>

        {/* Battery */}
        <div style={styles.column}>
          <div style={styles.subTitle}>
            <HiOutlineDeviceMobile style={styles.icon} />
            Battery & Charge
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Quick Charge:</strong>{" "}
              {specifications.battery.quickCharge}
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <div style={styles.subTitle}>
            <HiOutlineDeviceMobile style={styles.icon} />
            Additional Features
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Wireless Charging:</strong>{" "}
              {specifications.additionalFeatures.wirelessCharging}
            </li>
            <li style={styles.listItem}>
              <strong>Features:</strong>{" "}
              {specifications.additionalFeatures.features}
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <div style={styles.subTitle}>
            <FaRegStar style={styles.icon} />
            Box & Warranty
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>In the Box:</strong> {specifications.boxWarranty.inTheBox}
            </li>
            <li style={styles.listItem}>
              <strong>Warranty:</strong> {specifications.boxWarranty.warranty}
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <div style={styles.subTitle}>
            <HiOutlineDeviceMobile style={styles.icon} />
            Customer Care
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Phone:</strong> {specifications.customerCare.phone}
            </li>
            <li style={styles.listItem}>
              <strong>Email:</strong> {specifications.customerCare.email}
            </li>
            <li style={styles.listItem}>
              <strong>Address:</strong> {specifications.customerCare.address}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecificationsComponent;
