#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { YataInfrastructureStack } from '../lib/yata-infrastructure-stack';

const app = new cdk.App();
new YataInfrastructureStack(app, 'YataInfrastructureStack');
