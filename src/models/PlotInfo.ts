import { Rect } from './Rect';

export interface PlotInfo {
  rect: Rect;
  data: {
    url: string;
    imageUrl: string;
    ipfsHash: string;
    blobUrl: string;
  };
  zoneIndex: number;
  color: string;
  txHash: string;
  buyoutPrice: number; // TODO
  owner: string;
}

export interface PurchaseEventInfo {
  purchaseIndex: number;
  purchasePrice: string;
  blockNumber: number;
  txHash: string;
}

export interface HoleInfo {[index: number]: Array<Rect>;}
