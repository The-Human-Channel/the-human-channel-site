# Smart Packet Specification

## Defining Portable, Consent-Aware AI Communication Units

In a world of decentralized, AI-mediated communication, the format of information matters as much as its content. To support Consent-First AI interactions, data must be packaged with embedded context, permissions, and identity markers that govern how it can be processed.

The Smart Packet Specification defines a universal data structure for encoding asynchronous voice, transcript, intent, identity, and consent metadata into a single portable, machine-readable unit.

## Purpose of Smart Packets

Smart Packets serve as:

- Consent-aware communication containers
- Portable records of AI interactions
- Self-contained data objects that carry usage rules alongside content
- Retrieval-optimized units for AI systems that respect boundaries

Unlike raw data files or unstructured voice recordings, Smart Packets include embedded semantics that allow both humans and AI agents to understand the appropriate context, purpose, and scope of any interaction.

## Core Smart Packet Fields

**Header**
- Packet ID (unique identifier)
- Timestamp (creation and expiration)
- Version (specification version)
- SPID Reference (linked identity and consent record)

**Identity**
- Sender ID (PulseID or SPID)
- Recipient ID (if applicable)
- Voiceprint Reference (for authentication, where authorized)

**Consent Layer**
- Consent Scope (authorized purposes)
- Permissions Granted (data access, processing rights)
- Revocation Status (active, expired, revoked)
- Jurisdiction (applicable legal frameworks)

**Content**
- Audio Stream (voice recording or TTS output)
- Transcript (human-readable text version)
- Intent Label (inferred or declared intent)
- CTA (Call-To-Action metadata or buttons)

**Integrity & Security**
- Hash Signature (content integrity verification)
- Encryption Flags (for private or time-gated packets)
- Audit Log Reference (linked to external compliance logs)

## Smart Packet Formats

Smart Packets are designed for flexible deployment across multiple transmission channels:

- Encoded as portable data URIs for lightweight sharing
- Packaged as JSON-LD structures for machine parsing
- Embedded into QR codes, shortlinks, or SMS capsules
- Streamed in real-time during AI voice sessions

## Benefits of Smart Packets

- Self-contained and portable
- Fully auditable consent trail embedded directly into content
- Easy integration into asynchronous voice communication flows
- Compatible with AI retrieval systems, knowledge graphs, and language models
- Durable against platform shifts, preserving long-term interaction records

## Sample Use Cases

- VoiceMate Pulses delivered to individuals with embedded permissions
- Regulator-inspectable communication logs for compliance reviews
- Clean Voice-certified recordings embedded with consent metadata
- AI assistant handoffs governed by machine-readable Smart Packets
- Time-Activated Pulses that unlock based on schedule or permissions

## Relationship to SPID Protocol

Smart Packets function as the delivery layer, while SPID governs the identity and consent verification layer.

Together, they form an interoperable framework for safe, permission-based AI communication that respects both individual rights and regulatory mandates.

## The Human Channel Commitment

The Human Channel actively maintains the Smart Packet Specification as an open, evolving standard. We believe that AI interaction formats must prioritize transparency, portability, and consent at their core. Smart Packets provide the data container necessary for Consent-First AI to operate at scale — responsibly, accountably, and human-centered.
